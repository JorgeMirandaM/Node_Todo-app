
require('colors');
console.clear()


const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, inquirerPausa, leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');


const main = async () => {

    let opt = '';
    const tareas= new Tareas();

    const tareasDB= leerDB();

    if(tareasDB){
        tareas.cargarTareasFromArray(tareasDB);
    }


    do {
        //Imprime el menu
        opt = await inquirerMenu();

        switch (opt){
            case '1':
                const desc= await leerInput('Descripción: ');
                tareas.crearTarea(desc)
            break;

            case '2':
                tareas.listadoCompleto();
            break;

            case '3':
                tareas.listarPendientesCompletadas(true);
            break;

            case '4':
                tareas.listarPendientesCompletadas(false);
            break;
        }

        guardarDB(tareas.listadoArr);

        await inquirerPausa();

    } while (opt !== '0');

}


main();
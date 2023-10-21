
require('colors');
console.clear()


const { inquirerMenu, inquirerPausa, leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');


const main = async () => {

    let opt = '';
    const tareas= new Tareas();

    do {
        opt = await inquirerMenu();

        switch (opt){
            case '1':
                const desc= await leerInput('Descripción: ');
                tareas.crearTarea(desc)
            break;

            case '2':
                console.log(tareas._listado)
            break;
        }

        await inquirerPausa();

    } while (opt !== '0');

}


main();
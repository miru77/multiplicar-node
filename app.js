const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs').argv;
//let base = '5';

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado ${archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comnado no reconcido');
}



//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];

//console.log('limite', argv.limite);
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {


    console.log('=================='.green);
    console.log(`tabla de ${base}`.green);
    console.log('==================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${i * base}`);

    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, rejet) => {

        if (!Number(base)) {
            rejet(`el valor untruducido -${base}- no es un numero`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${i * base}\n`;
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) rejet(err)
            else
                resolve(`tabla-${base}.txt`)

        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}
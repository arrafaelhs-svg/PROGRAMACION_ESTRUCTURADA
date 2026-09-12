const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese la primera calificación: ', (calificacion1) => {
    rl.question('Ingrese la segunda calificación: ', (calificacion2) => {

        calificacion1 = Number(calificacion1);
        calificacion2 = Number(calificacion2);

        if (calificacion1 > calificacion2) {
            console.log(`La calificación más alta es: ${calificacion1}`);
        } else if (calificacion2 > calificacion1) {
            console.log(`La calificación más alta es: ${calificacion2}`);
        } else {
            console.log('Las dos calificaciones son iguales');
        }

        rl.close();
    });
});
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el nombre: ', (nombre) => {
    rl.question('Ingrese la edad: ', (edad) => {
        rl.question('Ingrese los años de experiencia: ', (experiencia) => {

            edad = Number(edad);
            experiencia = Number(experiencia);

            console.log(`Nombre del candidato: ${nombre}`);

            if (edad > 18 && experiencia > 0) {
                console.log('Candidato válido');
            } else {
                console.log('No cumple con los requisitos');
            }

            rl.close();
        });
    });
});
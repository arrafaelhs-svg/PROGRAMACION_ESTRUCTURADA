const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitar 3 nombres y mostrarlos
let nombres = [];

function solicitarNombre(contador) {
    if (contador < 3) {
        rl.question("Ingrese un nombre: ", (nombre) => {
            nombres.push(nombre);
            solicitarNombre(contador + 1);
        });
    } else {
        console.log("\nNombres ingresados:");
        for (let i = 0; i < nombres.length; i++) {
            console.log((i + 1) + ". " + nombres[i]);
        }
        rl.close();
    }
}

solicitarNombre(0);
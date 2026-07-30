const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la cantidad de dólares: ", (dolares) => {
    rl.question("Ingrese el tipo de cambio del euro (Ej. 0.88): ", (tipoCambio) => {

        dolares = parseFloat(dolares);
        tipoCambio = parseFloat(tipoCambio);

        let euros = dolares * tipoCambio;

        console.log(`$${dolares.toFixed(2)} equivalen a €${euros.toFixed(2)}`);

        rl.close();
    });
});

const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sumaPares(n) {
    if (n === 0) {
        return 0;
    } else {
        return (n * 2) + sumaPares(n - 1);
    }
}

rl.question("Ingrese la cantidad de numeros pares: ", (dato) => {

    const num = parseInt(dato);

    if (Number.isInteger(num) && num > 0) {
        console.log("La suma de los numeros pares es: " + sumaPares(num));
        rl.close();
        return;
    } else {
        console.log("Ingrese una cantidad valida");
        rl.close();
    }
});


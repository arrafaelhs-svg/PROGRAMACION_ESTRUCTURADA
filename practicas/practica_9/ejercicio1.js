
const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function numFactorial(n) {
    if (n === 1) {
        return 1;
    } else {
        return n * numFactorial(n - 1);
        
    }
}

function potencia(base, exponente) {
    if (exponente === 0) {
        return 1;
    } else {
        return base * potencia(base, exponente - 1);
    }
}

function suma(n) {
    if (n === 0) {
        return 0;
    } else {
        return n + suma(n - 1);
    }
}

rl.question("Ingrese un numero: ", (dato) => {

    const num = parseInt(dato);

    if (Number.isInteger(num) && num > 0) {
        console.log("Factorial: " + numFactorial(num));
        console.log("Potencia: " + (potencia(num, num)));
        console.log("Suma hasta n: " + suma(num));
        rl.close();
        return;
    } else {
        console.log("Ingrese una cantidad valida");
        rl.close();
    }
});

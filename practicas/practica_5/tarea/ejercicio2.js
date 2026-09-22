import readline from 'node:readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

rl.question("Ingrese el número A: ", (a) => {
    rl.question("Ingrese el número B: ", (b) => {
        rl.question("Ingrese el número C: ", (c) => {

            a = parseFloat(a);
            b = parseFloat(b);
            c = parseFloat(c);

            if (a === b && b === c) {
                console.log("Los tres números son iguales");
            } else if (a !== b && a !== c && b !== c) {
                console.log("Los tres números son diferentes");
            } else {
                console.log("Hay dos números iguales");
            }

            let mayor = Math.max(a, b, c);
            let menor = Math.min(a, b, c);

            console.log(`El número mayor es: ${mayor}`);
            console.log(`El número menor es: ${menor}`);

            if (a < 0 || b < 0 || c < 0) {
                console.log("Hay números negativos");
            }

            rl.close();
        });
    });
});
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el primer número: ', (numero1) => {

    rl.question('Ingrese el segundo número: ', (numero2) => {

        rl.question('Ingrese el operador (+, -, *, /): ', (operador) => {

            numero1 = Number(numero1);
            numero2 = Number(numero2);

            let resultado;

            switch (operador) {
                case '+':
                    resultado = numero1 + numero2;
                    console.log(`Resultado: ${resultado}`);
                    break;

                case '-':
                    resultado = numero1 - numero2;
                    console.log(`Resultado: ${resultado}`);
                    break;

                case '*':
                    resultado = numero1 * numero2;
                    console.log(`Resultado: ${resultado}`);
                    break;

                case '/':
                    if (numero2 !== 0) {
                        resultado = numero1 / numero2;
                        console.log(`Resultado: ${resultado}`);
                    } else {j
                        console.log('No se puede dividir entre cero');
                    }
                    break;

                default:
                    console.log('Operador no válido');
            }

            rl.close();
        });
    });
});
import readline from 'node:readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pedimos al usuario que ingrese un número
rl.question("Ingrese un numero N: ", (num) => {

    // Convertimos el dato ingresado a un número entero
    num = parseInt(num)

    // Variable para determinar si N es primo
    let primo = true;

    // El 1 no es un número primo
    if (num < 2) {
        primo = false;
    } else {

        // Comprobamos si N es divisible entre algún número
        for (let i = 2; i < num; i++) {

            // Si el residuo es 0, significa que es divisible
            if (num % i === 0) {
                primo = false;
                break;
            }
        }
    }

    // Mostramos si N es primo o no
    if (primo === true) {
        console.log(num + " es un numero primo")
    } else {
        console.log(num + " no es un numero primo")
    }

    // Mostramos todos los números primos desde 1 hasta N
    console.log("Numeros primos desde 1 hasta " + num + ":")

    // Recorremos todos los números desde 2 hasta N
    for (let j = 2; j<= num; j++) {

        // Suponemos inicialmente que el número es primo
        let esPrimo = true;

        // Comprobamos si tiene algún divisor
        for (let i = 2; i < j; i++) {

            // Si es divisible, no es primo
            if (j % i === 0) {
                esPrimo = false;
                break;
            }

        }

        // Si sigue siendo primo, lo mostramos
        if (esPrimo === true) {
            console.log(j)
        }

    }
})
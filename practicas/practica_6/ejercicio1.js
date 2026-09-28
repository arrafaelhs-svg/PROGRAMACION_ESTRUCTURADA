
import readline from 'node:readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Le pedimos al usuario que ingrese un número entero positivo
rl.question("Ingrese un numero entero positivo: ", (num) => {

    // Convertimos el dato ingresado de texto a un número entero
    num = parseInt(num)

    // Verificamos si el número es menor o igual a 0
    if (num <= 0){

        // Si es 0 o negativo, mostramos este mensaje
        console.log("No hay para negativos y el 0")

    } else {

        // Creamos la variable resultado y la iniciamos en 1
        let resultado = 1;

        // Recorremos los números desde 1 hasta el número ingresado
        for (let i = 1; i <= num; i++){

            // Multiplicamos el resultado anterior por el número actual
            resultado *= i
        }

        // Mostramos el resultado del factorial
        console.log("El factorial de " + num + " es: " + resultado)
    }
})
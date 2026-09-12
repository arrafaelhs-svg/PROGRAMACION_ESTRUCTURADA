import readline from 'node:readline'


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});


rl.question("ingrese un numero ", (numero) =>{

    if(numero >= 1) {
        console.log("el numero es positivo")
    } else if (numero < 0) {
        console.log("el numero es negativo")
    } else {
        console.log("el numero es cero")
    }

})
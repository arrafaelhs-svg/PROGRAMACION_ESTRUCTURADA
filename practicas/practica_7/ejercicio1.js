const readlineSync = require('readline-sync');

let numIngresado = 0;
let numeroSecreto = Math.floor(Math.random() * 50) + 1;

    console.log("========== adivina el numero =========")

while (numeroSecreto !== numIngresado) {

    let num = readlineSync.question("ingrese un numero para adivinar el numero secreto: ")

    numIngresado = parseInt(num)

    if (numIngresado < numeroSecreto) {
        console.log("El numero secreto es mayor al ingresado")
    } else if (numIngresado > numeroSecreto) {
        console.log("El numero secreto es menor al ingresado")
    } else if (numIngresado === numeroSecreto){
        console.log("felicidades encontraste el numero secreto!!!")
    } else {
        console.log("el valor ingresado es invalido")
    }


}






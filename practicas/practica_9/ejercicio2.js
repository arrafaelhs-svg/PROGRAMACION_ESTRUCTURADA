//Tarea 2: Funciones recursivas con figuras y menú
//Cree funciones recursivas para calcular lo siguiente: una que sume los primeros n números pares; otra que sume los primeros n números impares; y otra que calcule el n-ésimo término de la serie de Fibonacci. Cree un menú con Switch para que el usuario elija la operación, luego ingrese el valor de n. Muestre el resultado con mensajes descriptivos.

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

function sumaImpares(n) {

    if (n === 0) {
        return 0;
    } else {
        return (n * 2 - 1) + sumaImpares(n - 1)
    } 

}

function fibonachi(n){

    if (n === 1) {
        return 0;
    } else if (n === 2 ) {
        return 1 
    } else {
        return fibonachi(n - 1) + fibonachi(n - 2);
    }

}

console.log("=========== MENU ============")
console.log("1. funcion que sume los ultimos numeros pares ")
console.log("2. funcion que sume los ultimos numeros impares")
console.log("3. funcion que calcula el n-esimo termino de la serie de fibonacci")

rl.question("ingrese la opcion que desea realizar ", (opcion) =>{

    let eleccion = parseInt(opcion)

    switch (eleccion) {

        case 1 :

        rl.question("hasta que numero desea que se sumen los numeros pares: ", (dato) =>{

            let n = parseInt(dato)

            if (Number.isInteger(n) && n > 0){
                console.log("la suma de los numeros pares anteriores es : " + sumaPares(n))
                rl.close()
                return
            } else {
            console.log("Ingrese una cantidad valida");
            rl.close();
            }
        })

        break

        case 2 :

        rl.question("hasta que numero desea que se sumen los numeros impares: ", (dato) =>{

            let n = parseInt(dato)

            if (Number.isInteger(n) && n > 0){
                console.log("la suma de los numeros impares anteriores es : " + sumaImpares(n))
                rl.close()
                return
            } else {
            console.log("Ingrese una cantidad valida");
            rl.close();
            }
        })

        break

        case 3 :

        rl.question("hasta que valor de fibonacci quiere que se sume la serie : ", (dato) =>{

            let n = parseInt(dato)

            if (Number.isInteger(n) && n > 0){
                console.log("la suma de los numeros impares anteriores es : " + fibonachi(n))
                rl.close()
                return
            } else {
            console.log("Ingrese una cantidad valida");
            rl.close();
            }

        })

        break

        default :
        console.log("opcion invalida")
        rl.close()

    }






})













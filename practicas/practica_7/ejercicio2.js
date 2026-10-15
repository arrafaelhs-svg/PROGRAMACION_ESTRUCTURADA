const readlineSync = require('readline-sync');

let saldo = 1000 
let salir = false 

do {

    console.log('\n=== MENU PRINCIPAL ===');
    console.log('1. consultar saldo');
    console.log('2. retirar');
    console.log('3. depositar');
    console.log('4. salir');


    let opcion = parseInt(readlineSync.question('Seleccione una opcion (1-4): '));

    switch (opcion){

        case 1 : 
            console.log("====================================")
            console.log("su saldo es de: " + saldo + "$")
            console.log("====================================")

            break;

        case 2 :

            let retiro = readlineSync.question("ingrese lo que desea retirar: ")

            let retirar = parseInt(retiro)

        if (saldo >= retirar){

            saldo = saldo - retirar 
            console.log("====================================")

            console.log("usted a retirado: " + retirar + "$" )
            console.log("su nuevo saldo es de: " + saldo + "$")
        } else {
            console.log("====================================")
            console.log ("el monto a retirar es superoir a su saldo")
        }
            console.log("====================================")

            break;

        case 3 : 
            console.log("====================================")
            let deposito = readlineSync.question("ingrese cuanto desea depositar: ")

            let depositar = parseInt(deposito)

            if (depositar > 0 ){

            saldo = saldo + depositar
            console.log("====================================")
            console.log("su nuevo saldo es de: " + saldo + "$")
            console.log("====================================")
            } else {
            console.log("====================================")
            console.log("el deposito tiene que ser mayor a 0")
            console.log("====================================")
            }
            break;

        case 4 : 
        console.log("====================================")
        console.log("hasta pronto, tenga feliz dia!!!")
        salir = true
        console.log("====================================")
            break;

        case 67 :
        console.log("====================================")
        console.log("pinshi niño rata que haces aqui we")
        console.log("====================================")
        default : 
        console.log("valor ingrsado invalido, selecciona una de las opciones ")
    }


} while (!salir)




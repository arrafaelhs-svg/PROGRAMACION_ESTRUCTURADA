import readline from 'node:readline'


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

rl.question("ingrese un numero ", (numero1) =>{
    rl.question("ingrese otro numero ", (numero2) =>{
        if(numero1 > numero2) {
            console.log("su nuemro mayor es ",numero1)
        } else if (numero1 < numero2) {
            console.log("su numero mayor es ",numero2)
        } else {
            console.log("los numeros son iguales", numero1, "=", numero2)
        }
        rl.close()
    });
});





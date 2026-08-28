import readline from 'node:readline'


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

rl.question("ingrese su nombre completo: ",(nombre) =>{

    let nombreMayuscula = nombre.toUpperCase();
    let primeras4 = nombre.slice(0,4).toLowerCase();

    console.log(`nombre en mayuculas: ${nombreMayuscula} \n primeras 4 letras en minusculas: ${primeras4}`)

    rl.close()
});





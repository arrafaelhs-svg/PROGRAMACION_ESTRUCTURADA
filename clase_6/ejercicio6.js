
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("ingrese un dato cualquiera: ",(dato)=>{

    dato1 = parseFloat(dato);
    dato2 = isNaN(dato);

    console.log(`el dato ingresado fue: ${dato}`)
    console.log(`el dato prosesado con parseFloat dio como resultado: ${dato1}`)
    console.log(`el dato procesado con isNaN dio como resultado: ${dato2}`)

    rl.close();
});










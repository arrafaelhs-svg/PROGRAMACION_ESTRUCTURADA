const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la longitud en metros: ", (metros) => {

    metros = parseFloat(metros);

    let centimetros = metros * 100;
    
    console.log(`${metros} metros equivalen a ${centimetros} centímetros.`);

    rl.close();
});
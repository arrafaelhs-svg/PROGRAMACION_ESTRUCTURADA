const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese su código de carrera (ejemplo U20260867): ', (codigo) => {

    const primerasTres = codigo.slice(0, 3);

    console.log('Primeras tres letras:', primerasTres);
    rl.close();
});
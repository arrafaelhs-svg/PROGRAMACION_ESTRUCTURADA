const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese su nombre completo: ', (nombreCompleto) => {

    const mayusculas = nombreCompleto.toUpperCase();
    const minusculas = nombreCompleto.toLowerCase();

    console.log('MAYÚSCULAS:', mayusculas);
    console.log('minúsculas:', minusculas);
    rl.close();
});
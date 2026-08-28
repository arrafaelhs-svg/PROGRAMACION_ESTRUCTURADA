import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el código (Ej: EST20260645): ", (codigo) => {

    let primeros3 = codigo.substring(0, 3);
    let ultimos4 = codigo.slice(-4);

    console.log("Primeros 3 caracteres:", primeros3);
    console.log("Últimos 4 caracteres:", ultimos4);

    rl.close();
});
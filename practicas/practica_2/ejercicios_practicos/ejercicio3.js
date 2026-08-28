import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un número de referencia de 8 dígitos: ", (numero) => {

    let numeroTexto = String(numero);
    let primeros4 = numeroTexto.slice(0, 4);

    console.log("Número convertido a texto:", numeroTexto);
    console.log("Primeros 4 dígitos:", primeros4);

    rl.close();
});
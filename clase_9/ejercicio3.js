const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese un código numérico de 8 dígitos: ', (codigo) => {

    const codigoNumerico = Number(codigo);
    const codigoTexto = codigoNumerico.toString();
    const primerosCuatro = codigoTexto.slice(0, 4);

    console.log('Código original:', codigoNumerico);
    console.log('Primeros cuatro dígitos:', primerosCuatro);
    rl.close();
});
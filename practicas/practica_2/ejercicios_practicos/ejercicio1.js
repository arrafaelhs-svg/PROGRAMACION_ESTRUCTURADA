import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese su nombre: ", (nombre) => {

    console.log("Nombre en mayúsculas:", nombre.toUpperCase());
    console.log("Nombre en minúsculas:", nombre.toLowerCase());

    rl.close();
});
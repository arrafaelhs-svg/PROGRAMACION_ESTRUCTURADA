import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese su año de nacimiento: ", (añoNacimiento) => {

    let añoActual = new Date().getFullYear();
    let edad = añoActual - parseInt(añoNacimiento);

    console.log("Año actual:", añoActual);
    console.log("Su edad es:", edad, "años");

    rl.close();
});
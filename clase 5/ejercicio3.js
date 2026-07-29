import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la cantidad de horas: ", (horas) => {

    horas = Number(horas);

    const minutos = horas * 60;

    console.log(`${horas} horas equivalen a ${minutos} minutos.`);

    rl.close();
});
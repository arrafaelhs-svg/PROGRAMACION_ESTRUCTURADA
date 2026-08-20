import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la base del rectángulo: ", (base) => {
    rl.question("Ingrese la altura del rectángulo: ", (altura) => {

        base = Number(base);
        altura = Number(altura);

        const area = base * altura;

        console.log(`El área del rectángulo es: ${area}`);

        rl.close();
    });
});
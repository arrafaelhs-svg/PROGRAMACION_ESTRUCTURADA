
import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la primera nota: ", (nota1) => {
    rl.question("Ingrese la segunda nota: ", (nota2) => {
        rl.question("Ingrese la tercera nota: ", (nota3) => {

            nota1 = Number(nota1);
            nota2 = Number(nota2);
            nota3 = Number(nota3);

            const promedio = (nota1 + nota2 + nota3) / 3;

            console.log(`El promedio que obtuvo es de: ${promedio}`);

            rl.close();
        });
    });
});
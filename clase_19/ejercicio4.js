import readline from 'node:readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

rl.question("¿Cuántas entradas se vendieron por día? ", (entradas) => {
    entradas = parseInt(entradas);

    let total = 0;

    for (let dia = 1; dia <= 5; dia++) {
        total = entradas + total;
    }

    console.log(`Total de entradas vendidas: ${total}`);

    rl.close();
});
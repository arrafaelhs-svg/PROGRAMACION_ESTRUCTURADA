import readline from 'node:readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

rl.question("¿Cuánto ahorra por día? $", (ahorro) => {
    ahorro = parseFloat(ahorro);

    let ahorroTotal = 0;

    for (let dia = 1; dia <= 5; dia++) {
        ahorroTotal = ahorro + ahorroTotal;
    }

    console.log(`Total ahorrado: $${ahorroTotal.toFixed(2)}`);

    rl.close();
});
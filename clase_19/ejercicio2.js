import readline from 'node:readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

rl.question("¿Cuántas horas duró cada préstamo? ", (horas) => {
    horas = parseFloat(horas);

    let pagoTotal = 0;

    for (let i = 1; i <= 4; i++) {
        pagoTotal = (horas * 2.25) + pagoTotal;
    }

    console.log(`Recaudación total: $${pagoTotal.toFixed(2)}`);

    rl.close();
});
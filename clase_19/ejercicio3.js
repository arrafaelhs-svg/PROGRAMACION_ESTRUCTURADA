import readline from 'node:readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

rl.question("¿Cuánto gasta en transporte por día? $", (gasto) => {
    gasto = parseFloat(gasto);

    let gastoTotal = 0;

    for (let dia = 1; dia <= 6; dia++) {
        gastoTotal = gasto + gastoTotal;
        console.log(`Día ${dia}: $${gastoTotal.toFixed(2)}`);
    }

    console.log(`Total gastado: $${gastoTotal.toFixed(2)}`);

    rl.close();
});
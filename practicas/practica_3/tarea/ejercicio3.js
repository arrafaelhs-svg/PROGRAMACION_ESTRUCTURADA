const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el monto de compra: $', (monto) => {

    monto = Number(monto);

    let descuento = 0;

    if (monto > 100) {
        descuento = monto * 0.15;
    } else if (monto > 50) {
        descuento = monto * 0.10;
    }

    let total = monto - descuento;

    console.log(`Monto original: $${monto.toFixed(2)}`);
    console.log(`Descuento aplicado: $${descuento.toFixed(2)}`);
    console.log(`Total a pagar: $${total.toFixed(2)}`);

    rl.close();
});
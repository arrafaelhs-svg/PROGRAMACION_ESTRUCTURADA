import readline from 'node:readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

let pago = 0


rl.question("Ingrese la cantidad de boletos que desea comprar: ", (boletos) => {
    boletos = parseInt(boletos);

    if (boletos >= 5) {
        pago = 3
    } else {
        pago = 4
    }

    for (let i = 1; i <= boletos; i++) {
        console.log(`Boleto ${i } tiene un precio de: ${pago.toFixed(2)}$ `);

    }

    console.log(`El total a pagar es: ${pago * boletos}$ `);
    rl.close 
});




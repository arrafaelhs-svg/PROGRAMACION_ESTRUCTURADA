
import readline from "node:readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el precio del producto: ", (precio) => {
    rl.question("Ingrese el porcentaje de descuento: ", (descuento) => {


        precio = parseFloat(precio);
        descuento = parseFloat(descuento);


        let valorDescuento = (precio * descuento) / 100;
        let precioFinal = precio - valorDescuento;

        console.log("\n--- tiendita perrona  ---");
        console.log(`Valor del descuento: $${valorDescuento.toFixed(2)}`);
        console.log(`Precio final a pagar: $${precioFinal.toFixed(2)}`);

        rl.close();
    });
});
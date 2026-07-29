import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el nombre del producto: ", (producto) => {
    rl.question("Ingrese el precio unitario: ", (precio) => {
        rl.question("Ingrese la cantidad comprada: ", (cantidad) => {

            precio = Number(precio);
            cantidad = Number(cantidad);

            const total = precio * cantidad;

            console.log(`Producto: ${producto}`);
            console.log(`Precio unitario: ${precio}`);
            console.log(`Cantidad comprada: ${cantidad}`);
            console.log(`Total a pagar: ${total}`);

            rl.close();
        });
    });
});
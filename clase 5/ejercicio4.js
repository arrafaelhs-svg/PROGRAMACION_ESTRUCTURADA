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

            console.log(`Su producto es: ${producto}`);
            console.log(`Su precio unitario es: ${precio}`);
            console.log(`La cantidad comprada es: ${cantidad}`);
            console.log(`Total a pagar: ${total}`);

            rl.close();
        });
    });
});
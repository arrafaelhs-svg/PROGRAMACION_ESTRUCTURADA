const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el precio unitario del producto: ", (precio) => {
    rl.question("Ingrese la cantidad de productos: ", (cantidad) => {

        precio = parseFloat(precio);
        cantidad = parseFloat(cantidad);

        let total = precio * cantidad;

        console.log(`El total a pagar es: $${total.toFixed(2)}`);

        rl.close();
    });
});
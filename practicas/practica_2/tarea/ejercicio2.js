import readline from 'node:readline'


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

rl.question("ingrese el nombre del producto: ", (nombre)=>{
    rl.question("ingrese el precio unitario del producto: ", (precio)=>{
        rl.question("ingrese la cantidad de productos que compro: ", (cantidad) =>{

            let nameMay = nombre.toUpperCase();
            let primeras3 = nombre.slice(0,3).toLowerCase();
            let precioTotal = (precio * cantidad)
            let precioFinal = precioTotal.toFixed(2) 

            console.log(`Nombre del producto en mayusculas: ${nameMay} \n Primeras 3 letras del producto en minusculas: ${primeras3} \n Precio total de la compra: ${precioFinal}$`)

            rl.close()
        });
    });
});


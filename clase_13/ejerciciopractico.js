import readline from 'node:readline'


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

rl.question("ingrese el nombre del vendedor ", (nombre) => {
    rl.question("ingrese la cantidad de productos vendidos ", (cantidad) => {
        rl.question("ingrese el precio promedio de cada producto ", (precio) => {
            
            let cantidadNum = parseInt(cantidad);
            let precioNum = parseFloat(precio);
            let nombreMay = nombre.toUpperCase();
            let total = cantidadNum * precioNum;
            let comision = 0

            if (total >= 500) {
                comision = total * 0.07
                console.log("=========================================")
                console.log("se les aplico una comision del 7% por superar los 500$ de ventas")
            } else {
                comision = total * 0.03
                console.log("=========================================")
                console.log("se les aplico una comision del 3%")
            }

            let precioFin = total + comision;
            console.log("=========================================")
            console.log(`El vendedor es ${nombreMay} `);
            console.log(`las comisiones fueron de ${comision} $`);
            console.log(`el total fue de ${precioFin}$`)
            rl.close();
        });
    });
});
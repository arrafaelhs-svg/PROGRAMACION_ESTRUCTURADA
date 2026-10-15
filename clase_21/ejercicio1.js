import readline from 'node:readline'


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

function precioFinal(precio){
    const precioDesc = precio * 0.90
    return precioDesc
}

rl.question("ingrese el precio del producto: ", (dato) => {

    let precio = parseFloat(dato)
    const total = precioFinal(precio)

    console.log(`precio original: ${precio}$`)
    console.log(`el precio final con descuento del 10% es de ${total}$`)
})


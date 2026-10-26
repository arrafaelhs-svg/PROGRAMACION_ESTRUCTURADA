import { totalmem } from 'node:os';
import readline from 'node:readline'


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

const registrarVentas = (actual,cantidad,total) => {

    //caso base
    if (actual > cantidad){
        console.log(`cantidad de ventas: ${cantidad}`)
        console.log(`total de ingreso : ${total.toFixed(2)}`)
        rl.close()
        return
    }

    rl.question(`ingrese el monto de la venta ${actual}: $`, (dato) =>{

        const venta = parseFloat(dato)

        if (!Number.isFinite(venta) || venta < 0 ){
            console.log(`ingrese un monto valido`);
            registrarVentas(actual,cantidad,total);
            return;
        }
    
        const nuevoTotal = total + venta

        console.log(`total acumulado: ${nuevoTotal.toFixed(2)}`)

        registrarVentas(actual + 1,cantidad,nuevoTotal)

    });

}




rl.question("cuantas ventas desea registrar?", (dato) =>{

    const cantidad = parseInt(dato);

    if (Number.isInteger(cantidad) && cantidad > 0){
        registrarVentas(1,cantidad,0)
    }else{
        console.log("ingrese una cantidad valida")
        rl.close()
    }


});

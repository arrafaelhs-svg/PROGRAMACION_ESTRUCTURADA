const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let cantidad = 0;
let ingresos = 0;

function solicitarHoras(contador) {
    if (contador < cantidad) {
        rl.question(`Ingrese las horas del vehiculo ${contador + 1}: `, (respuesta) => {
            let horas = Number(respuesta);

            if (horas > 0 && respuesta.trim() !== '') {
                let costo = horas * 1.50;

                if (horas > 5) {
                    costo = costo * 0.90;
                }

                console.log(`Importe del vehiculo: $${costo.toFixed(2)}`);

                ingresos += costo;

                solicitarHoras(contador + 1);
            } else {
                console.log("Ingrese una cantidad de horas valida.");
                solicitarHoras(contador);
            }
        });
    } else {
        console.log(`\nIngresos totales: $${ingresos.toFixed(2)}`);
        rl.close();
    }
}

rl.question("Cuantos vehiculos desea registrar?: ", (respuesta) => {
    cantidad = Number(respuesta);

    if (Number.isInteger(cantidad) && cantidad > 0) {
        solicitarHoras(0);
    } else {
        console.log("Ingrese una cantidad entera mayor que cero.");
        rl.close();
    }
});
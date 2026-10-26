const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let cantidad = 0;
let total = 0;
let elevados = 0;

function solicitarConsumo(contador) {
    if (contador < cantidad) {
        rl.question(`Ingrese el consumo del equipo ${contador + 1} en kWh: `, (respuesta) => {
            let consumo = Number(respuesta);

            if (consumo >= 0 && respuesta.trim() !== '') {
                total += consumo;

                if (consumo > 15) {
                    console.log("Este equipo presenta un consumo elevado.");
                    elevados++;
                }

                solicitarConsumo(contador + 1);
            } else {
                console.log("Ingrese un consumo valido.");
                solicitarConsumo(contador);
            }
        });
    } else {
        console.log(`\nConsumo total: ${total.toFixed(2)} kWh`);
        console.log(`Equipos con consumo elevado: ${elevados}`);

        rl.close();
    }
}

rl.question("Cuantos equipos desea registrar?: ", (respuesta) => {
    cantidad = Number(respuesta);

    if (Number.isInteger(cantidad) && cantidad > 0) {
        solicitarConsumo(0);
    } else {
        console.log("Ingrese una cantidad entera mayor que cero.");
        rl.close();
    }
});
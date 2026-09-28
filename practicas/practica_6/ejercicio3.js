const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let notas = [];
let nota_total = 0;

function solicitarNotas(contador, cantidad) {

    if (contador < cantidad) {

        rl.question("Ingrese la nota: ", (nota_ingresada) => {

            nota_ingresada = parseInt(nota_ingresada);

            notas.push(nota_ingresada);

            solicitarNotas(contador + 1, cantidad);
        });

    } else {

        // Acumulamos las notas usando FOR
        for (let i = 0; i < notas.length; i++) {
            nota_total = nota_total + notas[i];
        }

        // Calculamos el promedio
        let promedio = nota_total / cantidad;

        // Buscamos la nota más alta y más baja
        let calificacion_alta = notas[0];
        let calificacion_baja = notas[0];

        for (let i = 1; i < notas.length; i++) {

            if (notas[i] > calificacion_alta) {
                calificacion_alta = notas[i];
            }

            if (notas[i] < calificacion_baja) {
                calificacion_baja = notas[i];
            }
        }

        console.log("\nEl promedio de las notas es: " + promedio.toFixed(2));
        console.log("La calificacion mas alta fue: " + calificacion_alta.toFixed(2));
        console.log("La calificacion mas baja fue: " + calificacion_baja.toFixed(2));

        rl.close();
    }
}

rl.question("¿Cuantas calificaciones desea ingresar?: ", (cantidad) => {

    cantidad = parseInt(cantidad);

    if (cantidad > 0) {
        solicitarNotas(0, cantidad);
    } else {
        console.log("Debe ingresar al menos una calificacion");
        rl.close();
    }
});

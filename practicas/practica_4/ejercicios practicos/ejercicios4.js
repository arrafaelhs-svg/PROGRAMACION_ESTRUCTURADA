const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese una calificación de 0 a 100: ", (calificacion) => {

    calificacion = Number(calificacion);
    let rango = Math.floor(calificacion / 10);

    switch (rango) {
        case 10:
        case 9:
            console.log("Calificación: A");
            break;

        case 8:
            console.log("Calificación: B");
            break;

        case 7:
            console.log("Calificación: C");
            break;

        case 6:
            console.log("Calificación: D");
            break;

        case 5:
        case 4:
        case 3:
        case 2:
        case 1:
        case 0:
            console.log("Calificación: F");
            break;

        default:
            console.log("Calificación no válida.");
            break;
    }

    rl.close();
});
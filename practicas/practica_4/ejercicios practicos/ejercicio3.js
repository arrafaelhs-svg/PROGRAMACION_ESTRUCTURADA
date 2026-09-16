const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== MENÚ DE CONVERSIONES ===");
console.log("1. Celsius a Fahrenheit");
console.log("2. Fahrenheit a Celsius");
console.log("3. Salir");

rl.question("Seleccione una opción: ", (opcion) => {

    switch (opcion) {
        case "1":
            rl.question("Ingrese los grados Celsius: ", (celsius) => {
                let fahrenheit = celsius * 9 / 5 + 32;
                console.log(`${celsius} °C = ${fahrenheit.toFixed(2)} °F`);
                rl.close();
            });
            break;

        case "2":
            rl.question("Ingrese los grados Fahrenheit: ", (fahrenheit) => {
                let celsius = (fahrenheit - 32) * 5 / 9;
                console.log(`${fahrenheit} °F = ${celsius.toFixed(2)} °C`);
                rl.close();
            });
            break;

        case "3":
            console.log("Programa finalizado.");
            rl.close();
            break;

        default:
            console.log("Opción no válida.");
            rl.close();
            break;
    }
});
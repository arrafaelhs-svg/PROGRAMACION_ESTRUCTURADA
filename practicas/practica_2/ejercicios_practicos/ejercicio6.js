import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese su nombre: ", (nombre) => {

    rl.question("Ingrese su apellido: ", (apellido) => {

        rl.question("Ingrese su año de ingreso: ", (añoIngreso) => {

            rl.question("Ingrese su promedio: ", (promedio) => {

                let nombreMayuscula = nombre.toUpperCase();
                let apellidoMayuscula = apellido.toUpperCase();

                let primeras3 = apellido.slice(0, 3);

                let ultimos2 = añoIngreso.slice(-2);

                let promedioDecimal = parseFloat(promedio);

                console.log("\n--- INFORMACIÓN DEL ESTUDIANTE ---");
                console.log("Nombre:", nombreMayuscula);
                console.log("Apellido:", apellidoMayuscula);
                console.log("Primeras 3 letras del apellido:", primeras3);
                console.log("Últimos 2 dígitos del año:", ultimos2);
                console.log("Promedio:", promedioDecimal.toFixed(2));

                rl.close();
            });
        });
    });
});
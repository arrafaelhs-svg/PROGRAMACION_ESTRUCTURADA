import readline from 'node:readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

let saldo = 1000;

function menu() {
    console.log("\n--- CAJERO AUTOMÁTICO ---");
    console.log("1. Consultar saldo");
    console.log("2. Retirar dinero");
    console.log("3. Depositar dinero");
    console.log("4. Salir");

    rl.question("Seleccione una opción: ", (opcion) => {

        opcion = parseInt(opcion);

        switch (opcion) {

            case 1:
                console.log(`Saldo actual: $${saldo.toFixed(2)}`);
                menu();
                break;

            case 2:
                rl.question("Ingrese el monto a retirar: $", (monto) => {

                    monto = parseFloat(monto);

                    if (monto <= 0) {
                        console.log("El monto debe ser mayor a 0");
                    } else if (monto % 5 !== 0) {
                        console.log("El monto debe ser múltiplo de 5");
                    } else if (monto > saldo) {
                        console.log("Saldo insuficiente");
                    } else {
                        saldo = saldo - monto;
                        console.log(`Retiro exitoso. Nuevo saldo: $${saldo.toFixed(2)}`);
                    }

                    menu();
                });
                break;

            case 3:
                rl.question("Ingrese el monto a depositar: $", (monto) => {

                    monto = parseFloat(monto);

                    if (monto <= 0) {
                        console.log("El monto debe ser mayor a 0");
                    } else if (monto > 5000) {
                        console.log("El depósito no puede exceder $5000");
                    } else {
                        saldo = saldo + monto;
                        console.log(`Depósito exitoso. Nuevo saldo: $${saldo.toFixed(2)}`);
                    }

                    menu();
                });
                break;

            case 4:
                console.log("Gracias por usar el cajero");
                rl.close();
                break;

            default:
                console.log("Opción no válida");
                menu();
                break;
        }
    });
}

menu();
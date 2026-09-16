
import readline from 'node:readline'

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});


console.log("=== MÁQUINA DE BEBIDAS ===");
console.log("1. Agua");
console.log("2. Refresco");
console.log("3. Jugo");
console.log("4. Café");
console.log("5. Té");

rl.question("Seleccione una bebida: ", (opcion) => {

    switch (opcion) {
        case "1":
            console.log("Ha seleccionado: Agua");
            break;

        case "2":
            console.log("Ha seleccionado: Refresco");
            console.log("¿Desea agregar hielo?");
            break;

        case "3":
            console.log("Ha seleccionado: Jugo");
            console.log("¿Desea agregar hielo?");
            break;

        case "4":
            console.log("Ha seleccionado: Café");
            break;

        case "5":
            console.log("Ha seleccionado: Té");
            break;

        default:
            console.log("Bebida no disponible");
            break;
    }

    rl.close();
});
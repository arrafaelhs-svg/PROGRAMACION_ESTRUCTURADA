
import { stdin, stdout } from "node:process"
import readline from "node:readline"

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("ingrese el nombre del empleado: ", function(name) {
    rl.question("ingrese el salario del empleado: ", function(salario) {
        rl.question("ingrese la cantidad de horas trabajadas: ", function(horas) {

            salario  = parseFloat(salario)
            horas = parseFloat(horas)

            const pagoTotal = salario * horas

            console.log(`El empleado ${name} tiene un pago total de: $${pagoTotal.toFixed(2)}`)

            rl.close()
        });
    });
});




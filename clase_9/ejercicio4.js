const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el nombre del estudiante: ', (nombre) => {
    rl.question('Ingrese el apellido del estudiante: ', (apellido) => {
        rl.question('Ingrese el año de ingreso: ', (anioIngreso) => {
            rl.question('Ingrese la cuota mensual: ', (cuota) => {

                const nombreMayus = nombre.toUpperCase();
                const apellidoMayus = apellido.toUpperCase();
                const primerasTresApellido = apellido.slice(0, 3);
                
                const anioTexto = anioIngreso.toString();
                const ultimosDosAnio = anioTexto.slice(-2);
                
                const cuotaNumero = parseFloat(cuota);
                const cuotaFormateada = cuotaNumero.toFixed(2);

                console.log('Nombre completo en mayúsculas:', nombreMayus, apellidoMayus);
                console.log('Primeras tres letras del apellido:', primerasTresApellido);
                console.log('Últimos dos dígitos del año:', ultimosDosAnio);
                console.log('Cuota mensual:', cuotaFormateada);

                rl.close();
            });
        });
    });
});
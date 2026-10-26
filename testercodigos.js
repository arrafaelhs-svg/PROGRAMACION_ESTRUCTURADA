const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const reportes = (actual,cantidad,total) => {

    //caso base
    if (actual > cantidad){
        console.log("------------------------------------------------")
        console.log(`cantidad de reportes son: ${cantidad}`)
        console.log(`la cantidad de reportes criticos es de : ${total}`)
        console.log("------------------------------------------------")
        rl.close()
        return
    }
    console.log("============= TIPO DE PRIORIDAD ============")
    console.log("1. prioridad baja ")
    console.log("2. prioridad media")
    console.log("3. prioridad alta")
    rl.question(`ingrese el tipo de prioridad del reporte # ${actual}: `, (dato) =>{
    console.log("\n=============================================")
        const prioridad = parseFloat(dato)

        if (!Number.isFinite(prioridad) || prioridad < 0 || prioridad > 3){
            console.log(`ingrese un monto valido`);
            reportes(actual,cantidad,total);
            return;
        }

        if (prioridad == 3){

        reportes(actual + 1,cantidad,total + 1)
        return
        }

        if (Number.isFinite(prioridad) && prioridad > 0 && prioridad <= 3){

        reportes(actual + 1,cantidad,total)

        }
    });

}

rl.question("cuantos reportes deseas registrar? ", (dato) =>{

    const cantidad = parseInt(dato);

    if (Number.isInteger(cantidad) && cantidad > 0){
        reportes(1,cantidad,0)
    }else{
        console.log("ingrese una cantidad valida")
        rl.close()
    }


});

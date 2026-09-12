import readline from 'node:readline'


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

rl.question("ingrese el un codigo con el formato DEP-VEN-2026-045 ", (codigo)=>{

    codigo  =           codigo.toUpperCase();
    let departamento = codigo.slice(4,7)
    let departamentoMay = departamento.toUpperCase();

    if (departamentoMay === "VEN"){

    console.log("El código pertenece al departamento de VENTAS ");
    } else {
    console.log("El código no pertenece al departamento de VENTAS ");
    }

    rl.close()
});
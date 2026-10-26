const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const registrarNota=(actual,cantidad,totalNotas)=>{

    //caso base
    if(actual > cantidad){
        
        const promedio =  totalNotas/cantidad

        console.log(`su promedio final es de: ${promedio.toFixed(2)}`)

        if (promedio >= 6){
            console.log("el estudiante aprobo")
        }else {
            console.log("el estudiante reprovo") 
        }   
        rl.close()
        return 
    }
    
    rl.question(`ingrese la nota ${actual} :`, (dato)=>{

    const nota = parseFloat(dato)

    if (!Number.isFinite(nota) || nota < 0 || nota > 10){
        console.log("ingrese una nota entre 0 y 10")
        registrarNota(actual,cantidad,totalNotas)
        return
    }

    const suma = nota + totalNotas

    //llamada recursiva
    registrarNota(actual + 1, cantidad, suma)
    })
}

rl.question("CUANTAS EVALUACIONES DESEA REGISTRAR: " ,(dato)=> {

    const cantidad = parseFloat(dato)

    if (Number.isFinite(cantidad) && cantidad > 0  ){
        registrarNota(1,cantidad,0)
    }else {
        console.log("cantidad no valida")
        rl.close()
    }

})

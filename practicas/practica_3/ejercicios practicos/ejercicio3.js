import readline from 'node:readline'


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});


rl.question("ingrese su calificadion ", (calificacion) =>{

    if(calificacion >= 0 && calificacion <= 100){
        if (calificacion > 60){
        console.log("aprobado")
        } else if (calificacion <= 60){
        console.log("reprobado")
        }
    }else{
        console.log("calificación no válida")
    }
    rl.close()
});

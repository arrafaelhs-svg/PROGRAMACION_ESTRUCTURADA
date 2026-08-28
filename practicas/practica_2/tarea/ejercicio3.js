import readline from 'node:readline'


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

rl.question("ingrese su año de nacimiento: ", (nacimiento)=>{

    let fecha = new Date();
    let anio = fecha.getFullYear();
    let edad = anio - nacimiento
    
    console.log(`El año actual es ${anio} \nSu edad aproximada en años es de: ${edad}`)

    rl.close()
});




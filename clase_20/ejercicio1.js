import readline from 'node:readline'


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

rl.question("ingrese un numero para mostrar su tabla de multiplicar: ", (num) => {
    console.log(`Tabla de multiplicar del ${num}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i} `);
    }
    rl.close();
});

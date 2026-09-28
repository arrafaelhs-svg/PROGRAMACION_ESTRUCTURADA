import readline from 'node:readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

//Un museo permite el ingreso gratuito a cada quinto visitante. Solicite al usuario cuántos visitantes llegarán. Al finalizar, muestre cuántas entradas gratuitas se otorgaron.

let visitanteGratuito= 0

rl.question("ingrese cuantos visitantes llegaran: ", (visitantes) => {
    visitantes = parseInt(visitantes);

    for(let i = 1; i <= visitantes; i++){
        if (i % 5 === 0) {
            console.log(`El visitante ${i} entro gratuitamente.`);
            visitanteGratuito++;
        };
    };

    console.log(`la cantidad de visitantes que entraron gratuitamente son: ${visitanteGratuito}`);

    rl.close();
});





import readline from 'node:readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

//Solicite al usuario cuántos productos fabricó una empresa. Los productos cuyo número sea múltiplo de 3 necesitan revisión. Muestre cuáles son y cuántos productos deberán revisarse en total.

let productosDefectuosos = 0

rl.question("ingrese cuantos productos fabrico la empresa: ", (productos) => {
    productos = parseInt(productos);

    for(let i = 1; i <= productos; i++){
        if (i % 3 === 0) {
            console.log(`El producto ${i} necesita revisión.`);
            productosDefectuosos++;
        };
    };

    console.log(`la cantidad de productos defectuosos fueron que se deberan revisar son: ${productosDefectuosos}`);



    rl.close();
});

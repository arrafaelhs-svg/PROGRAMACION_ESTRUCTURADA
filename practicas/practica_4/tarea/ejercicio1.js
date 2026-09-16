
import readline from 'node:readline'

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question("ingrese el numero de lados de una figura geometrica: ", (lados) => {

    switch (lados){

    case "3":
        console.log ("La figura es un triangulo");
        break;

    case "4":
        console.log ("La figura es un cuadrilatero");
        break;

    case "5":
        console.log ("La figura es un pentagono");
        break;

    case "6":
        console.log ("La figura es un hexagono");
        break;

    default : 
    console.log ("figura no reconocida")
    break;

}

    rl.close();
});



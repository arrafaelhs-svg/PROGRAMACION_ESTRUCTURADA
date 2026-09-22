import readline from 'node:readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

rl.question("Ingrese el tipo de tarjeta (1=Débito, 2=Crédito, 3=Premium): ", (tarjeta) => {
    rl.question("Ingrese el monto a retirar: $", (monto) => {

        tarjeta = parseInt(tarjeta);
        monto = parseFloat(monto);

        let limite;

        switch (tarjeta) {
            case 1:
                limite = 500;
                break;

            case 2:
                limite = 1000;
                break;

            case 3:
                limite = 2000;
                break;

            default:
                console.log("Tarjeta no válida");
                rl.close();
                return;
        }

        if (monto > limite) {
            console.log("Límite excedido");
        } else if (monto % 10 !== 0) {
            console.log("El monto debe ser múltiplo de 10");
        } else {
            console.log("Retiro exitoso");
        }

        rl.close();
    });
});
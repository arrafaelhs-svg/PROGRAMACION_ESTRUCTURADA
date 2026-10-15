const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 1. Círculo
function calcularAreaCirculo(radio) {
    return Math.PI * Math.pow(radio, 2);
}
function calcularPerimetroCirculo(radio) {
    return 2 * Math.PI * radio;
}

// 2. Cuadrado
function calcularAreaCuadrado(lado) {
    return Math.pow(lado, 2);
}
function calcularPerimetroCuadrado(lado) {
    return 4 * lado;
}

// 3. Rectángulo
function calcularAreaRectangulo(base, altura) {
    return base * altura;
}
function calcularPerimetroRectangulo(base, altura) {
    return 2 * (base + altura);
}

// 4. Triángulo equilátero
function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}
function calcularPerimetroTriangulo(lado1, lado2, lado3) {
    return lado1 + lado2 + lado3;
}

// --- MENÚ PRINCIPAL ---

function mostrarMenu() {
    console.log("\n==============================");
    console.log("   CALCULADORA DE FIGURAS     ");
    console.log("==============================");
    console.log("1. Círculo");
    console.log("2. Cuadrado");
    console.log("3. Rectángulo");
    console.log("4. Triángulo");
    console.log("5. Salir");
    
    rl.question("\nElige una opción (1-5): ", (opcion) => {
        switch (opcion) {
            case '1':
                rl.question("Ingresa el radio del círculo: ", (r) => {
                    let radio = parseFloat(r);
                    let area = calcularAreaCirculo(radio);
                    let perimetro = calcularPerimetroCirculo(radio);
                    
                    console.log(`\n--- Resultados ---`);
                    console.log(`Área: ${area.toFixed(2)}`);
                    console.log(`Perímetro: ${perimetro.toFixed(2)}`);
                    rl.close();
                });
                break;

            case '2':
                rl.question("Ingresa el valor del lado del cuadrado: ", (l) => {
                    let lado = parseFloat(l);
                    let area = calcularAreaCuadrado(lado);
                    let perimetro = calcularPerimetroCuadrado(lado);
                    
                    console.log(`\n--- Resultados ---`);
                    console.log(`Área: ${area.toFixed(2)}`);
                    console.log(`Perímetro: ${perimetro.toFixed(2)}`);
                    rl.close();
                });
                break;

            case '3':
                rl.question("Ingresa la base del rectángulo: ", (b) => {
                    rl.question("Ingresa la altura del rectángulo: ", (a) => {
                        let base = parseFloat(b);
                        let altura = parseFloat(a);
                        let area = calcularAreaRectangulo(base, altura);
                        let perimetro = calcularPerimetroRectangulo(base, altura);
                        
                        console.log(`\n--- Resultados ---`);
                        console.log(`Área: ${area.toFixed(2)}`);
                        console.log(`Perímetro: ${perimetro.toFixed(2)}`);
                        rl.close();
                    });
                });
                break;

            case '4':
                rl.question("Ingresa la base del triángulo: ", (b) => {
                    rl.question("Ingresa la altura del triángulo: ", (a) => {
                        rl.question("Ingresa el lado 1 del triángulo: ", (l1) => {
                            rl.question("Ingresa el lado 2 del triángulo: ", (l2) => {
                                rl.question("Ingresa el lado 3 del triángulo: ", (l3) => {
                                    let base = parseFloat(b);
                                    let altura = parseFloat(a);
                                    let lado1 = parseFloat(l1);
                                    let lado2 = parseFloat(l2);
                                    let lado3 = parseFloat(l3);

                                    let area = calcularAreaTriangulo(base, altura);
                                    let perimetro = calcularPerimetroTriangulo(lado1, lado2, lado3);
                                    
                                    console.log(`\n--- Resultados ---`);
                                    console.log(`Área: ${area.toFixed(2)}`);
                                    console.log(`Perímetro: ${perimetro.toFixed(2)}`);
                                    rl.close();
                                });
                            });
                        });
                    });
                });
                break;

            case '5':
                console.log("¡Hasta luego!");
                rl.close();
                break;

            default:
                console.log("Opción no válida. Inténtalo de nuevo.");
                rl.close();
                break;
        }
    });
}

// Ejecutar el menú
mostrarMenu();



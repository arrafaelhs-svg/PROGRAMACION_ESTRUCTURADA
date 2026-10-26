//Tarea 3: Funciones recursivas para manejo de cadenas
//Cree las siguientes funciones recursivas: una que reciba una cadena y devuelva la cantidad de vocales; otra que reciba una cadena y devuelva la cadena invertida; y otra que reciba una cadena y determine si es palíndromo (se lee igual al derecho y al revés). Solicite una palabra o frase al usuario y muestre los tres resultados

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función auxiliar sencilla para quitar acentos y pasar a minúsculas
function quitarAcentos(cadena) {
    return cadena.toLowerCase()
        .replace(/á/g, 'a')
        .replace(/é/g, 'e')
        .replace(/í/g, 'i')
        .replace(/ó/g, 'o')
        .replace(/ú/g, 'u');
}

// 1. Contar vocales (recorriendo con un bucle y usando la función de limpiar acentos)
function contarVocales(cadena) {
    let textoLimpio = quitarAcentos(cadena);
    let contador = 0;
    let vocales = "aeiou";
    
    for (let i = 0; i < textoLimpio.length; i++) {
        if (vocales.includes(textoLimpio[i])) {
            contador++;
        }
    }
    return contador;
}

// 2. Invertir cadena
function invertirCadena(cadena) {
    return cadena.split('').reverse().join('');
}

// 3. Verificar si es palíndromo
function esPalindromo(cadena) {
    // Quitamos acentos y eliminamos todos los espacios en blanco
    let limpio = quitarAcentos(cadena).replace(/ /g, "");
    let invertido = limpio.split('').reverse().join('');
    
    return limpio === invertido && limpio.length > 0;
}

// --- INTERACCIÓN CON EL USUARIO ---

rl.question("Ingresa una palabra o frase: ", (texto) => {
    let totalVocales = contarVocales(texto);
    let textoInvertido = invertirCadena(texto);
    let esPali = esPalindromo(texto);

    console.log("\n--- Resultados ---");
    console.log(`Cantidad de vocales: ${totalVocales}`);
    console.log(`Cadena invertida: "${textoInvertido}"`);
    console.log(`¿Es palíndromo?: ${esPali ? "Sí" : "No"}`);

    rl.close();
});



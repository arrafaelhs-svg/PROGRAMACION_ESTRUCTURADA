
const readlineSync = require('readline-sync');

// Funcion para obtener la letra de la calificacion
function obtenerLetra(nota) {
    if (nota >= 90) {
        return "A";
    } else if (nota >= 80) {
        return "B";
    } else if (nota >= 70) {
        return "C";
    } else if (nota >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// Funcion para calcular el promedio
function calcularPromedio(calificaciones) {
    let suma = 0;

    for (const nota of calificaciones) {
        suma += nota ;
    }

    return suma / calificaciones.length;
}

// Solicitar la cantidad de calificaciones
let cantidad = parseInt( readlineSync.question ("Cuantas calificaciones desea ingresar: ") );

let calificaciones = [];

// Ingresar las calificaciones
for (let i = 0; i < cantidad; i++) {
    let nota = parseFloat( readlineSync.question ("Ingrese la calificacion " + (i + 1) + ": ") );

    calificaciones.push(nota);
}

// Mostrar las calificaciones y sus letras
console.log("\nCALIFICACIONES INGRESADAS");

for (const nota of calificaciones) {
    console.log("Calificacion: " + nota + " - Letra: " + obtenerLetra(nota));
}

// Calcular y mostrar el promedio
let promedio = calcularPromedio(calificaciones);

console.log("\nPromedio: " + promedio.toFixed(2));
console.log("Letra del promedio: " + obtenerLetra(promedio));

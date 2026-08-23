
// Declaramos la cantidad de kilowatts consumidos
let kilowatts = 250;

// Declaramos el precio fijo por cada kilowatt
let precioKilowatt = 0.15;

// Calculamos el costo base de la electricidad
let costoBase = kilowatts * precioKilowatt;

// Calculamos el impuesto del 10% sobre el costo base
let impuesto = costoBase * 0.10;

// Calculamos el costo total sumando el costo base y el impuesto
let costoTotal = costoBase + impuesto;

// Mostramos el resumen de la factura en consola
console.log(`Consumo: ${kilowatts} kWh`);
console.log(`Costo sin impuesto: $${costoBase.toFixed(2)}`);
console.log(`Impuesto (10%): $${impuesto.toFixed(2)}`);
console.log(`Costo total a pagar: $${costoTotal.toFixed(2)}`);
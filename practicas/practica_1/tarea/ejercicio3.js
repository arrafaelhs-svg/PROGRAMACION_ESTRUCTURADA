
let kilowatts = 100;
let precioKilowatt = 0.15;

let costoBase = kilowatts * precioKilowatt;
let impuesto = costoBase * 0.10;
let costoTotal = costoBase + impuesto;

console.log(`Consumo: ${kilowatts} kWh`);
console.log(`Costo sin impuesto: $${costoBase.toFixed(2)}`);
console.log(`Impuesto (10%): $${impuesto.toFixed(2)}`);
console.log(`Costo total a pagar: $${costoTotal.toFixed(2)}`);

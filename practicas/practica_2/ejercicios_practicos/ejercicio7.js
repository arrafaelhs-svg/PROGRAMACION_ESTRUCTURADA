let fecha = new Date();

let horas = String(fecha.getHours()).padStart(2, "0");
let minutos = String(fecha.getMinutes()).padStart(2, "0");
let segundos = String(fecha.getSeconds()).padStart(2, "0");

console.log(`Hora actual: ${horas}:${minutos}:${segundos}`);
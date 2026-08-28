import readline from 'node:readline'


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

let fecha = new Date();

let anio = fecha.getFullYear();
let mes = fecha.getMonth() + 1;
let dia = fecha.getDate();
jjj
let hora = fecha.getHours();
let minutos = fecha.getMinutes();
let segundos = fecha.getSeconds();

console.log(`Hoy es ${dia}/${mes}/${anio} y la hora actual es ${hora}:${minutos}:${segundos}`);

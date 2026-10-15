
let cobre = {
    nombre: "cobre",
    precio: 20,
    cantidad: 10
};

let niquel = {
    nombre: "niquel",
    precio: 10,
    cantidad: 23
};

let plata = {
    nombre: "plata",
    precio: 400,
    cantidad: 120
};

let oro = {
    nombre: "oro",
    precio: 4000,
    cantidad: 5
};

let inventario = [cobre, niquel, plata, oro];

let valorTotal = 0;


console.log("INVENTARIO DE METALES");

for (const metal of inventario) {

    let precioTotal = metal.precio * metal.cantidad;

    console.log("Nombre: " + metal.nombre);
    console.log("Precio: $" + metal.precio);
    console.log("Cantidad: " + metal.cantidad);
    console.log("Valor total: $" + precioTotal);
    console.log("----------------------");

    valorTotal += precioTotal;
}

const resumen = {
    totalProductos: inventario.length,
    valorTotalInventario: valorTotal
};

console.log("=========================")
console.log("RESUMEN DEL INVENTARIO");

for (const propiedad in resumen) {
    console.log(propiedad + ": " + resumen[propiedad]+ "$");
}

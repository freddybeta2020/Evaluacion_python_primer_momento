//Arreglo 1: [3,5,9,10,35,42,12,22,25]
//Arreglo 2: [9,5,33,12,7,20,22,3,8]
//De los anteriores arreglos mostrar en forma de (tabla de multiplicar) 
//la suma de los elementos del arreglo 1 con los elementos del arreglo 2 también sumar el total de cada arreglo.

var arreglo1 = [3, 5, 9, 10, 35, 42, 12, 22, 25];
var arreglo2 = [9, 5, 33, 12, 7, 20, 22, 3, 8];


for (let i = 0; i < arreglo1.length; i++) {
    let resultado = arreglo1[i] * arreglo2[i];
    console.log(`${arreglo1[i]} x ${arreglo2[i]} = ${resultado}`);
}

var arreglo1 = [3, 5, 9, 10, 35, 42, 12, 22, 25];
var suma = 0;

for (let i = 0; i < arreglo1.length; i++) {
    suma = suma + arreglo1[i];
}

console.log("La suma de los elementos del arreglo1 es: " + suma);

var arreglo2 = [9, 5, 33, 12, 7, 20, 22, 3, 8];
var suma2 = 0;

for (let i = 0; i < arreglo2.length; i++) {
    suma2 = suma + arreglo2[i];

}

console.log("La suma de los elementos del arreglo numero 2 es : " + suma2);


let compra = {
    nombre: [],
    precio: [],
    cantidad: []
};

let cantidadPro = Number(prompt("cuantos producto vas comprar"));

for (let i = 0; i < cantidadPro; i++) {
    for (let prod in compra) {
        compra[prod][i] = prompt("Ingrese " + prod + " #" + (i + 1));
    }
}

let totalCompra = 0;
let iva = 0;
let totalIva = 0;

for(let x=0; x <cantidadPro; x++){
    
    let totalProducto=0;
    for(let producto in compra){
        document.write(producto +":" + compra[producto][x]+"<br>" );
        totalProducto=Number(compra.cantidad[x]) * Number(compra.precio[x]);
    }
    totalCompra += totalProducto;
    iva = totalProducto * 0.19;  
      
    document.write("Total : "+ totalProducto + "<br>" );
    document.write("Valor iva es  : "+ iva + "<br>" );
    document.write("----------------------<br>");
} 


document.write("El total de las compras es de : " + totalCompra + "<br>");



// 3.	Del siguiente arreglo: [maíz, kiwi, manzana, melocotón, remolacha, pepino, fresas, aguacate, cereza]

// Mostrar en el navegador en cual posición se encuentran las frutas y en cual posición las verduras. puedes utilizar la función




const verduras = ["maíz", "kiwi", "manzana", "melocotón", "remolacha", "pepino", "fresas", "aguacate", "cereza"];

for (let i = 0; i < verduras.length; i++) {
    document.write(`La verdura "${verduras[i]}" se encuentra en la posición ${i}.  "<br>"` );
}

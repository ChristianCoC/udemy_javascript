// Uso de arreglos
/*
    - Un arreglo nos permite almacenar multiples valores en una sola variable,
    es decir, un arreglo es una coleccion de datos.
    - Sintaxis:
        let arreglo = [valor1, valor2, valor3, ...];
        indices ->      0,      1,      2,      ...
    - Nota: La cantidad de elementos depende de la cantidad de valores que se agreguen al arreglo.
    - Modificar el valor de un elemento del arreglo:
        let arreglo = [valor1, valor2, valor3, ...];
        matriz[indice] = nuevoValor;
        arreglo[0] = 5;
        arreglo --> [5, valor2, valor3, ...]
    *No es necesario modificar todos los elementos del arreglo.
    *Los valores no declarados son undefined.
    -Leer u obtener el valor de un elemento del arreglo:
        let matriz = [valor1, valor2, valor3, ...];
        console.log(matriz[indice]);
        console.log(matriz[0]); --> valor1
        console.log(matriz[1]); --> valor2
        console.log(matriz[2]); --> valor3
        console.log(matriz);    --> [valor1, valor2, valor3, ...]
*/

// Ejemplos:
let numerosArreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numerosArreglo);

// Modificar el valor de un elemento del arreglo
numerosArreglo[0] = 5;
numerosArreglo[1] = 'Hola';
numerosArreglo[2] = true;
numerosArreglo[3] = null;
numerosArreglo[4] = undefined;
numerosArreglo[5] = 2.5;
numerosArreglo[6] = (2 + 5);
console.log(numerosArreglo);

// Leer u obtener el valor de un elemento del arreglo
console.log(`Indice 0: ${numerosArreglo[0]}`);
console.log(`Indice 1: ${numerosArreglo[1]}`);
console.log(`Indice 2: ${numerosArreglo[2]}`);
console.log(`Indice 3: ${numerosArreglo[3]}`);
console.log(`Indice 4: ${numerosArreglo[4]}`);
console.log(`Indice 5: ${numerosArreglo[5]}`);
console.log(`Indice 6: ${numerosArreglo[6]}`);

// Iterar un arreglo
for (let i = 0; i < numerosArreglo.length; i++) {
    console.log(`Indice ${i}: ${numerosArreglo[i]}`);
}
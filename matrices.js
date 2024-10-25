// Uso de Matrices
/*
    - Una matriz es un arreglo de 2 dimensiones (arreglo de arreglos).
    - Sintaxis:
        let matriz =                [[valor1, valor2, valor3 ], [valor4, valor5, valor6]];
        indices(renglon, columna) ->    0,0     0,1     0,2         1,0     1,1     1,2
        *Matriz de 2 renglones y 3 columnas
*/

// Declaracion de una matriz
let numeros = [[1, 2, 3], [4, 5, 6]];
console.log(numeros);

// Modificar los valores de una matriz
numeros[0][0] = 100;
console.log(numeros);
numeros[1][2] = 200;
console.log(numeros);

// Obtener los valores de una matriz
console.log(numeros.length);
console.log(numeros[0].length);
console.log(numeros[1].length);
console.log(numeros[0][0]);
console.log(numeros[1][2]);

// Iterar una matriz
for (let renglon = 0; renglon < numeros.length; renglon++) {
    for (let columna = 0; columna < numeros[renglon].length; columna++) {
        console.log(`Indice ${renglon}, ${columna}: ${numeros[renglon][columna]}`);
    }
}
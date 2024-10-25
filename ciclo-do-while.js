// Ciclo do-while
/*
    - El ciclo do-while se ejecuta al menos una vez su bloque de codigo,
    debido a que la condicion a revisar se evalua al final del bloque.
*/

let i = 1;
do {
    console.log(`El valor de i es ${i++}`);
} while (i <= 10);

let contador = 0, repeticiones = 10;
do {
    console.log(`El valor de contador es ${contador++}`);
} while (contador <= repeticiones)
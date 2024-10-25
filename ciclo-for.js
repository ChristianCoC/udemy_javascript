// Ciclo for
/*
    - El ciclo for nos permite especificar cuantas veces debe ejecutarse
    o repetir un bloque de codigo.

    for (1.- declaracion de variables; 2.- condicion; 4.- incremento o decremento) {
        3.- se ejecuta el bloque de codigo
    }
    1.- Se ejecuta solo una vez al iniciar el ciclo.
    2.- Se ejecuta mientras la condicion sea verdadera.
    3.- Se ejecuta una vez al finalizar el bloque de codigo.
    4.- Se puede usar para incrementar o decrementar variables.
*/

for (let valor = 1; valor <= 10; valor++) {
    console.log(`El valor es ${valor}`);
}

let repeticiones = 5;
for (let valor = 0; valor <= repeticiones; valor++) {
    console.log(`El valor es ${valor}`);
}
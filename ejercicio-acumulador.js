// Realizar la suma de los primeros 5 numeros utilizando un ciclo for
let acumulador = 0;
for (let i = 1; i <= 5; i++) {
    console.log(`${acumulador} + ${i} = ${acumulador + i}`);
    acumulador += i;
}
console.log(`La suma de los primeros cinco numeros es: ${acumulador}`);

// Realizar la suma de los primeros 5 numeros utilizando un ciclo while
let i = 1;
acumulador = 0;
while (i <= 5) {
    console.log(`${acumulador} + ${i} = ${acumulador + i}`);
    acumulador += i;
    i++;
}
console.log(`La suma de los primeros cinco numeros es: ${acumulador}`);

// Realizar la suma de los primeros 5 numeros utilizando un ciclo do-while
i = 1;
acumulador = 0;
do {
    console.log(`${acumulador} + ${i} = ${acumulador + i}`);
    acumulador += i;
    i++;
} while (i <= 5);
console.log(`La suma de los primeros cinco numeros es: ${acumulador}`);
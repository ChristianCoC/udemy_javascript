// Operadores ternarios (Para simplicar el codigo en una sola linea)

let numero = 10;
let esPar = (numero % 2 == 0) ? true : false;
console.log(`El numero es par? --> ${esPar}`)

// Ejemplo
const EDAD_MINIMA = 18;
let edad = 17;
let puedeEntrar = (edad >= EDAD_MINIMA) ? console.log("Puede entrar") : console.log("No puede entrar");
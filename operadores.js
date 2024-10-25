// Operadores aritmeticos
let a, b, c, d, e, f;

// Suma
a = 10 + 5;
console.log(a);

// Resta
b = 10 - 5;
console.log(b);

// Multiplicacion
c = 10 * 5;
console.log(c);

// Division
d = a / 5;
console.log(d);

// Modulo
e = 10 % 3;
console.log(e);

// Potencia
f = 10 ** 3;
console.log(f);

// Incremento (pre -> antes de usar la variable)
++a;
console.log(a);

// Incremento (post -> despues de usar la variable)
a++;
console.log(a);

// Decremento (pre -> antes de usar la variable)
--b;
console.log(b);

// Decremento (post -> despues de usar la variable)
b--;
console.log(b);

// Ejemplos de incremento y decremento
let g, h, i;
g = 10;
h = 2;
i = ++g * h--;
console.log(i); // 11 * 2 = 22
console.log(g); // 11
console.log(h); // 1 Se resta el decremento al vover a usar la variable

// Operadores de asignacion (=, +=, -=, *=, /=, %=, **=)
let miNumero = 10;
console.log(miNumero);

miNumero = 15;
console.log(miNumero);

miNumero += 5;
console.log(miNumero);

miNumero -= 5;
console.log(miNumero);

miNumero *= 5;
console.log(miNumero);

miNumero /= 5;
console.log(miNumero);

miNumero %= 5;
console.log(miNumero);

miNumero **= 5;
console.log(miNumero);

// Operadores de comparacion (==, ===, !=, !==, >, <, >=, <=)

// Igualdad (== solo compara el valor y hace un tipo de conversion si es necesario)
let numero = 10;
let texto = "10";
console.log(numero == texto);

// Igualdad estricta (=== compara el valor y el tipo de dato)
console.log(numero === texto);

// Desigualdad (!=)
console.log(numero != texto);

// Desigualdad estricta (!==)
console.log(numero !== texto);

// Mayor que (>)
console.log(numero > texto);

// Menor que (<)
console.log(numero < texto);

// Mayor o igual que (>=)
console.log(numero >= texto);

// Menor o igual que (<=)
console.log(numero <= texto);

// String interpolation
console.log(`El numero 10 es igual a el texto --> ${numero == texto}`);
console.log(`El numero 10 es igual a el texto --> ${numero === texto}`);

// Operadores logicos (&&, ||, !)

// and (&&) -> solo funciona con dos valores booleanos
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// or (||) -> solo funciona con dos valores booleanos
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// not (!)
console.log(!true);
console.log(!false);
console.log(!0);
console.log(!1);

// Sentencia if-else
let miEdad = 19;

// Si la condicion es verdadera
if (miEdad >= 18) {
    console.log("Eres mayor de edad");
}

// Si la condicion es falsa (opcional)
else {
    console.log("Eres menor de edad");
}

// Sentencia if-else if-else
let miEdad2 = 17;

if (miEdad2 >= 18) {
    console.log("Eres mayor de edad");
}

else if (miEdad2 >= 16) {
    console.log("Eres un adolescente");
}

else {
    console.log("Eres menor de edad");
}

// Ejemplo (Dia de la semana)
let diaSemana = 8;

if (diaSemana == 1) {
    console.log("Lunes");
}
else if (diaSemana == 2) {
    console.log("Martes");
}
else if (diaSemana == 3) {
    console.log("Miercoles");
}
else if (diaSemana == 4) {
    console.log("Jueves");
}
else if (diaSemana == 5) {
    console.log("Viernes");
}
else if (diaSemana == 6) {
    console.log("Sabado");
}
else if (diaSemana == 7) {
    console.log("Domingo");
}
else {
    console.log(`Dia de la semana ${diaSemana} no valido`);
}
//jercicio 1: Conversor de temperatura

//Crea una función flecha que convierta temperaturas de grados Celsius a Fahrenheit. La fórmula para convertir Celsius
//a Fahrenheit es: Fahreneit = (Celsius * 9 / 5) + 32

const CerlsiusToFahrenheit = (cerlsius) => (cerlsius * 9/5) + 32;



// Ejercicio 2: Generador de mensajes personalizados

// Implementa una función flecha que tome un nombre y una edad como argumentos y devuelva un mensaje en formato de cadena, por ejemplo:

// "Hola Juan, tienes 30 años de edad."


const saludar = (nombre, edad) => `Hola ${nombre}, tienes ${edad} años de edad`;
console.log(saludar("jose", 24));




//  Ejercicio 3: Convertir de millas a kilómetros

// Crea una función flecha que convierta millas a kilómetros. Considera que: 1 milla = 1.60934 km

const millasAkilometros = (millas) => millas >= 0 ? millas * 1.60934 : 'Entrada no valida';




//  Ejercicio 4: Consejos según el clima

// Crea una función flecha que, según el clima ingresado como argumento, retorne un consejo adecuado. Por ejemplo:

// Si el clima es “lluvioso”, debe sugerir llevar un paraguas.
// Si el clima es “soleado”, debe sugerir llevar un sombrero.
// Utiliza el operador ternario para simplificar la evaluación condicional en este ejercicio.


const obtenerConsejoClima = (clima) =>
    clima === "lluvioso" ? 'debe llevar un paraguas' :
    clima === "soleado" ? 'debes llevar un sombrero' : 
    'es un lindo dia';

console.log(obtenerConsejoClima("soleado"));
console.log(obtenerConsejoClima("lluvioso"));

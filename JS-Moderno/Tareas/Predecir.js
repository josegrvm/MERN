

/*  Desestructuración en objetos anidados */
const info = {
    personal: {
        nombre: "Carlos",
        apellido: "Vega",
        detalles: {
            edad: 30, 
            ocupacion: "Ingeniero" 
        },
    },
};

const { personal: { detalles: { edad, salario } } } = info;
console.log(edad); //  30
console.log(salario); // undefined 
//Resultados:
// 30  
// undefined  =  como salario no existe dentro del objeto nos regresa "undefined"



/*  Uso del operador spread en la fusión de objetos */
const objetoA = { a: 1, b: 2, c: 3 };
const objetoB = { b: 4, c: 5, d: 6 };
const resultado = { ...objetoA, ...objetoB };
console.log(resultado); // { a: 1, b: 2, c: 3 , b: 4, c: 5, d: 6 }
        // Resultado:
// { a: 1, b: 4, c: 5, d: 6 }  =  Las claves duplicadas son sobrescritas por el objetoB



/* Ámbito de variables en funciones y bloques */
const verificar = () => { 
    if (true) {
        const a = 2;
        let b = 3;
        var c = 4;
    }
    console.log(c); // 4
    console.log(a); // error
    console.log(b); // error
};
verificar(); 
        // Resultado:
// 4
// error.  =  "var" es legible afuera del bloque if mientras "let" y "const" no ya que son ambito de bloque
// error



/*  Propiedades de objetos inmutables */
const datos = Object.freeze({ nombre: "Luis", edad: 29 });
datos.edad = 30;
console.log(datos.edad); // 29
        // Resultado:
// 29  =  Object.inmutable evita modificaciones



/* Manipulación de arreglos sin modificar el original */
const original = [1, 2, 3];
const nuevo = original.concat(4);
console.log(original); // [1, 2, 3]
console.log(nuevo); // [1, 2, 3, 4]
        // Resultado:
// [ 1, 2, 3 ]
// [ 1, 2, 3, 4 ]  =  .concat crea un nuevo objeto sin modifical el original 



/*  Acceso a elementos de un arreglo con destructuración */
const frutas = ["manzana", "naranja", "pera", "mango"];
const [primera, segunda] = frutas;
console.log(primera); // "manzana"
console.log(segunda); // "naranja"
        // Resultado:
// manzana
// naranja  =  destructuracion asigna por posicion del array



/*  Comportamiento del ámbito de let en bucles anidados */
for (let i = 0; i < 3; i++) {
    for (let i = 0; i < 2; i++) {
        console.log(i); // 010101
    }
}
        // Resultado:
// 010101  =  cada for crea un nuevo ambito de "lef i"



/*  Uso del operador spread para combinar arreglos */
const numeros1 = [1, 2, 3];
const numeros2 = [3, 4, 5];
const combinados = [...numeros1, ...numeros2];
console.log(combinados); // [ 1, 2, 3, 3, 4, 5 ]
        // Resultado:
// [ 1, 2, 3, 3, 4, 5 ]  =  spread copia los elementos de cada arreglo en uno nuevo



/*  Alcance y captura de variables dentro de una función */
const demostracion = () => {
    var nombre = "Ana";
    let edad = 25;
    if (true) {
        var nombre = "Luis";
        let edad = 30;
    }
    console.log(nombre); // luis
    console.log(edad); // 25
};
demostracion();
        // Resultado:
// luis
//  25  =    "let" tiene alcance de bloque y no afecta a la externa en cambio "var" si
//            ya que tiene alcance de funcion

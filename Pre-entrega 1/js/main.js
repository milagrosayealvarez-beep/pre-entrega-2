 const nombre_usuario = prompt ("Ingrese su nombre de usuario")
const edad = parseInt( prompt ("¿Cuantos años tiene?"))

let numero1 = parseFloat (prompt ("Ingrese un numero"))
let numero2 = parseFloat(prompt ("Ingrese otro numero"))

let suma = numero1 + numero2

const mensaje = "Bienvenida " + nombre_usuario + ". Tu tienes " + edad + " años"
const NumeroFinal = "La suma de " + numero1 + " y " + numero2 + " es igual a " + suma 

console.log(mensaje);

alert(NumeroFinal) 

/* /* clase 5: objetos literales  */

/* const libro = {
    titulo: "muy Profundo",
    autor: "ana cpello",
    anio: 2015

}

console.log(libro)

/* como modificar un objeto */
/* 
libro.anio = 2019

console.log (libro)

/* como agregar una propiedad nueva */

/* libro.calidad = "original", */

/* console.log (libro); */

/* como eliminar una propiedad del objeto */

/* delete libro.autor */ 

/* METODO Y THIS */
  
/* const personaConMetodo = {
    nombre : "Milagros",
    saludar : function () {
        console.log ("hola me llamo" , this.nombre)
    }
 
} */

/* personaConMetodo.saludar() */


/* array vs objetos */

/* ejemplo de producto de tienda  */

/* const productos = [
    {nombre: "bikini", precio: 15000, stok: 2},
    {nombre: "medias", precio: 3000, stok: 30},
    {nombre: "individuales", precio: 5000, stok: 5}
] */

/* para acceder a una propiedad dentro de un array, primero elegimos el elemento por indice y despues la propiedad  */

/* console.log ("El producto que requiere es" , productos [0].nombre) */

/* find y finter */

/* const usuario = [
    {id: 1 , nombre: "roberto" , activo: true },
    {id: 2 , nombre: "florencia" , activo: false },
    {id: 3 , nombre: "carlitos" , activo: false }

];

const usuarioActivo = usuario.find((usuario) => {
    return usuario.activo === false
})

console.log(usuarioActivo) */

/*  function libro (titulo, autor, anio) {
    this.titulo = titulo,
    this.autor = autor,
    this.anio = anio
 };

 const libro1 = new libro ("muy profundo", "ana coello", 2015);
 const libro2 = new libro ("a dos metros de ti", "avelyn loto", 2019)

 console.log (libro1);
 console.log (libro2);
 */


/* primero hacemos el la funcion de productos.
 asi la enseño el profe */

/* function Productos (id, nombre, stock, precio) {
    this.id = id,
    this.nombre = nombre,
    this.stock = stock,
    this.precio = precio
};
 */
/* asi lo pide el ticher */
class Producto {
    constructor (id, nombre, stock, precio) {
        this.id = id;
        this.nombre = nombre;
        this.stock = stock;
        this.precio = precio
}   
/* creamos esta funsion para que se actualice el stock */
    vender (cantidad){
        if (cantidad <= this.stock){
            this.stock = this.stock - cantidad;
            console.log ("venta realizada con exito. Nuevo stock de " + this.nombre + ":" + this.stock)
        } else {
            console.log ("No hay suficiente stock")

        }
    }
};
/* creamos los productos usando la funsion pre establecida para que no alla errores  */

const producto1 = new Producto ( 1 , "Medias", 30 , 3500 );
const producto2 = new Producto ( 2 , "Bikinis", 5 , 15000 );
const producto3 = new Producto ( 3 , "Pantalon de pijama" , 3 , 10000 );
const producto4 = new Producto ( 4 , "toallas", 2 , 5000 );

/* agrupamos los productos en un catalogo (array) */
const catalogo = [producto1, producto2 , producto3, producto4];

/* probamos la venta del producto */

producto1.vender(5);
producto2.vender(6);

/* vemos la actualizacion del catalogo */
console.log ("catalogo actualizado:" , catalogo)

/* variables */

let dineroGastado = 0
let productosAgregados = 0
let continuar = true

  // Acá abajo evaluamos 'opcion' con condicionales

while (continuar) {
    const opcion = prompt(
        "selecciona un producto para agregar al carrito:\n "+
        "1 - Lata de tomate ($3500)\n "+
        "2 - Leche entera ($2500)\n "+
        "3 - Azucar ($3000)\n "+
        "4 - Una docena de huevos ($5000)\n "+
        "0 - Finalizar compra"

    )
    if (opcion ==="1"){
        dineroGastado += 3500
        productosAgregados ++
        alert ("agregaste Lata de tomate al carrito")
        } else if (opcion === "2"){
            dineroGastado += 2500
            productosAgregados ++
            alert("agregaste leche entera")
        }else if (opcion === "3"){
            dineroGastado += 3000
            productosAgregados ++
            alert ("agregaste azucar")
        }else if (opcion ==="4"){
            dineroGastado+= 5000
            productosAgregados ++
            alert ("agregaste una docena de huevos")
        } else if (opcion === "0" || opcion === null ) {
            continuar = false 
            alert ("Finalizaste tu compra ")
        } else {
            alert ("opcion no valida. Por favor ingresar un numero del menu")
        }

}
alert (
  "¡Gracias por tu compra!\n" +
  "Total de productos: " + productosAgregados + "\n" +
  "Monto final a pagar: $" + dineroGastado
);

function crearProducto(precio, cantidad) {
  return {
    precio: precio,
    cantidad: cantidad,
  }
}

const calcularCosto = (producto) => producto.precio * producto.cantidad;


const calcularTotal = (productos) => productos.reduce((total, producto) => total + calcularCosto(producto), 0);


const producto1 = crearProducto(10, 3);
const producto2 = crearProducto(20, 2);

const total = calcularTotal([producto1, producto2]);

console.log(total);

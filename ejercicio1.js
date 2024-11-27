/**
 * Imagina que estás trabajando en un sistema de gestión de un restaurante. 
  Tienes una lista de pedidos de diferentes clientes y quieres calcular el 
  total recaudado en un día y cuántos platos de cada tipo se vendieron.
 */

const pedidos = [
  {
    cliente: "Juan",
    platos: [
      { nombre: "Pizza", cantidad: 1, precio: 12 },
      { nombre: "Ensalada", cantidad: 2, precio: 5 },
    ],
  },
  {
    cliente: "Ana",
    platos: [
      { nombre: "Pizza", cantidad: 2, precio: 12 },
      { nombre: "Pasta", cantidad: 1, precio: 10 },
    ],
  },
  {
    cliente: "Pedro",
    platos: [
      { nombre: "Ensalada", cantidad: 2, precio: 5 },
      { nombre: "Pasta", cantidad: 2, precio: 10 },
    ],
  },
];
// 1. Calcular el subtotal de cada pedido
const subtotales = pedidos.map((pedido) => {
  const subtotal = pedido.platos
    .map((plato) => plato.cantidad * plato.precio)
    .reduce((a, b) => a + b, 0);
  return { ...pedido, subtotal };
});

console.log("Subtotales por pedido: ", subtotales);

// 2. Calcular el total recaudado
const totalRecaudado = subtotales
  .map((pedido) => pedido.subtotal)
  .reduce((a, b) => a + b, 0);

console.log("Total recaudado: ", totalRecaudado);

// 3. Extraer todos los platos de los pedidos
const todosLosPlatos = pedidos.reduce((platos, pedido) => {
  return platos.concat(pedido.platos);
}, []);

console.log(todosLosPlatos);

// 4. Calcular la cantidad de platos vendidos por tipo
const platosVendidos = todosLosPlatos.reduce((contador, plato) => {
  if (!contador[plato.nombre]) {
    contador[plato.nombre] = 0;
  }
  contador[plato.nombre] += plato.cantidad;
  return contador;
}, {});

console.log("Platos venidos por tipo: ", platosVendidos);

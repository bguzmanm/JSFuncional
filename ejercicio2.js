/**
 * Tu tarea es gestionar las ventas en una tienda de electrónica que vende 
 * diferentes productos como smartphones, laptops y cámaras. 
 * Cada venta contiene la información del cliente, los productos vendidos y sus cantidades.
 * Debes calcular el subtotal de cada venta, el total de las ventas, 
 * extraer todos los productos vendidos y calcular la cantidad de productos 
 * vendidos por categoría (smartphones, laptops y cámaras).
 */
const ventas = [
  {
    cliente: "Juan",
    productos: [
      { nombre: "smartphone", cantidad: 1, precio: 350 },
      { nombre: "laptop", cantidad: 1, precio: 800 },
    ],
  },
  {
    cliente: "Ana",
    productos: [
      { nombre: "smartphone", cantidad: 2, precio: 350 },
      { nombre: "cámara", cantidad: 1, precio: 250 },
    ],
  },
  {
    cliente: "Pedro",
    productos: [
      { nombre: "laptop", cantidad: 1, precio: 800 },
      { nombre: "cámara", cantidad: 2, precio: 250 },
    ],
  },
];

// Escribe tu código aquí

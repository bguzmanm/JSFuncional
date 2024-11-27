function filtrar(array, predicado) {
  return array.filter(predicado);
}

function transformar(array, transformacion) {
  return array.map(transformacion);
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

function esPar(numero) {
  return numero % 2 === 0;
}

function duplicar(numero) {
  return numero * 2;
}
const numerosPares = filtrar(numeros, esPar);
console.log(numerosPares);
const numerosDuplicados = transformar(numeros, duplicar);
console.log(numerosDuplicados);
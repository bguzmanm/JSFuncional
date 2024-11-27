const arreglo = [1, 2, 3, 4, 5];

/**
 * MAP -> crea un nuevo arreglo, con el resultado de aplicar 
 * una función en cada elemento del arreglo original
 */
const cuadrados = arreglo.map((numero) => numero * numero);
console.log(cuadrados);

/**
 * FILTER -> crea un nuevo arreglo, con los elementos que cumplen
 * una condición especificada por una función
 */
const pares = arreglo.filter((numero) => numero % 2 === 0);
console.log(pares);

/**
 * REDUCE -> reduce un arreglo a un único valor aplicando una función acumuladora
 */

const suma = arreglo.reduce((acumulado, numero) => acumulado + numero, 0);
const sumaPares = arreglo.reduce((acumulado, numero) => numero % 2 === 0 ? acumulado + numero : acumulado, 0);
console.log(suma);
console.log(sumaPares);

/**
 * forEach
 */
arreglo.forEach(numero => console.log(numero));

/**
 * some -> evalúa el contenido del arreglo en virtud 
 * de que UN elemento cumpla el predicado
 */
const tienePares = arreglo.some(numero => numero % 2 === 0);
const tieneImpares = arreglo.some(numero => numero % 2 !== 0);
console.log(tienePares);
console.log(tieneImpares);

/**
 * every -> evalúa el contenido del arreglo en virtud 
 * de que TODOS los elementos cumplan el predicado
 */
const sonPares = arreglo.every(numero => numero % 2 === 0);
const menoresQue6 = arreglo.every(numero => numero <= 6 );
console.log(sonPares);
console.log(menoresQue6);

/**
 * find -> retorna el primer elemento que cumpla con 
 * la condición de la función
 * findIndex
 */
const primerPar = arreglo.find(numero => numero % 2 === 0);
const posPrimerPar = arreglo.findIndex(numero => numero % 2 === 0);
console.log(primerPar);
console.log(posPrimerPar);

/**
 * sort -> ordena el arreglo de acuerdo a una función de ordenamiento
 */
const numerosOrdenados = arreglo.sort((a, b) => b - a);
console.log(numerosOrdenados);

/**
 * includes
 */
const constieneTres = arreglo.includes(3);
console.log(constieneTres);


console.log(arreglo);

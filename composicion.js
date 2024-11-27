function duplicar(numero) {
  return numero * 2;
}
function incrementar(numero) {
  return numero + 1;
}
function duplicarEIncrementar(numero) {
  return incrementar(duplicar(numero));
}

const resultado = duplicarEIncrementar(10);
console.log(resultado);


function minusculas(texto) {
  return texto.toLowerCase();
}
function reemplazarEspacios(texto) {
  return texto.replace(/\s+/g, "-");
}
function transformarTexto(texto) {
  return reemplazarEspacios(minusculas(texto));
}
const textoOriginal = "Programación Funcional en JavaScript";
const textoTransformado = transformarTexto(textoOriginal);

console.log(textoTransformado);

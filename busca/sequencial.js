/*
A pesquisa linear parte do início da lista e percorre cada elemento até encontrar uma correspondência ou finalizar todos os elementos.
Indicado para quando os elementos não estão ordenados.
*/

function pesquisaLinear(lista, elementoDesejado) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === elementoDesejado) {
      return i;
    }
  }
  return -1;
}

// A pesquisa linear possui complexidade O(n), pois irá passar por todos elementos até encontrar o desejado.

function pesquisaLinearIn(lista, elementoDesejado) {
  return lista.includes(elementoDesejado);
}

function pesquisaLinearIndex(lista, elementoDesejado) {
  const index = lista.indexOf(elementoDesejado);
  return index === -1 ? -1 : index;
}
const teste = Array.from({length: 1000}, (_, i) => i);
console.log(pesquisaLinear(teste,10011));
console.log(pesquisaLinearIn(teste,1));
console.log(pesquisaLinearIndex(teste,999));
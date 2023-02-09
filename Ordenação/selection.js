// Selection Sort

/*
A ideia do algoritmo é:
Encontre o menor elemento a partir da posição 0. Troque este elemento com o elemento da posição 0

Encontre o menor elemento a partir da posição 1. Troque este elemento com o elemento da posição 1

E assim sucessivamente...
*/

function selectionSort(lista) {
  // Laço externo
  for(let i = 0; i < lista.length; i++) {
    // Inicializa o elemento menor com a posição atual do índice externo
    let menor = i;
    // Percorre a lista a partirr do índice externo + 1
    for(let j = i+1; j < lista.length; j++) {
      //  Se o item da lista for menor que a posição inicial
      if (lista[j] < lista[menor]) {
        // Passa a ser o menor
        menor = j;
      }
    }
    if (menor !== i) {
      // Realiza a troca
      let aux = lista[menor];
      lista[menor] = lista[i];
      lista[i] = aux;
    }
  }
  return lista;
}

let C = [10, 8, 7, 4, 3, 11, 13, 15, 10, 11, 1, 4, 7];
console.log(C);
console.log(selectionSort(C));
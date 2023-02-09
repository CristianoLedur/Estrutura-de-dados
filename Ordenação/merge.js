function mergeSort(lista) {
  if (lista.length > 1) {
    // Identifica o elemento do meio
    let meio = Math.floor(lista.length / 2);
    // ivide a lista em duas partes a partir do meio
    let listaDaEsquerda = lista.slice(0, meio);
    let listaDaDireita = lista.slice(meio);
    // Invoca recursivamente a função para ordenar cada parte da lista
    mergeSort(listaDaEsquerda);
    mergeSort(listaDaDireita);
    let i = 0;
    let j = 0;
    let k = 0;

    while( (i < listaDaEsquerda.length) && (j < listaDaDireita.length) ) {
      // Insere na nova lista ordenada o menor elemento das duas
      if(listaDaEsquerda[i] < listaDaDireita[j]) {
        lista[k] = listaDaEsquerda[i];
        // Incrementa o índice da lista da esquerda
        i++;
      } else {
        lista[k] = listaDaDireita[j];
        // Incrementa o índice da lista da direita
        j++;
      }
      // Incrementa o índice da lista final
      k++;
    }
    // caso restem elementos
    while(i < listaDaEsquerda.length) {
      lista[k]= listaDaEsquerda[i];
      i++;
      k++;
    }
    while(j < listaDaDireita.length) {
      lista[k]= listaDaDireita[j];
      j++;
      k++;
    }
  }
  return lista;
}

let C = [10, 8, 7, 4, 3, 11, 13, 15, 10, 11, 1, 4, 7];
console.log(C);
console.log(mergeSort(C));

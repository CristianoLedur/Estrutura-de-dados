function quickSort(lista) {
  // Se a lista contém menos de dois elementos, retorna a própria lista
  if (lista.length < 2) {
    return lista;
  }
  //  Cria três listas
  let menor = [], igual = [], maior = [];
  // Seleciona o pivô aleatoriamente
  let pivotIndex = Math.floor((Math.random() * lista.length));
  let pivot = lista[pivotIndex];
  for(let i = 0; i < lista.length; i++) {
    // Compara e adiciona os valores no array correspondente
    if(lista[i] < pivot) {
      menor.push(lista[i]);
    } else if(lista[i] === pivot) {
      igual.push(lista[i]);
    } else if (lista[i] > pivot) {
      maior.push(lista[i]);
    }
  }
  // No final combina os três arrays ordenados
  return quickSort(menor).concat(igual).concat(quickSort(maior));
}


let teste = [10, 8, 7, 4, 3, 11, 13, 15, 10, 11, 1, 4, 7];
console.log(teste);
console.log(quickSort(teste));
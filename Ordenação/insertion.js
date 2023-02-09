function insertionSort(lista) {
  for(let i = 1; i < lista.length; i++) {
    let chave = lista[i];
    let j = i - 1;
    while (j >= 0 && lista[j] > chave) {
      lista[j + 1] = lista[j];
      j-=1;
    }  
    lista[j+1] = chave;
  }
  return lista;
}

let teste = [10, 8, 7, 4, 3, 11, 13, 15, 10, 11, 1, 4, 7];
console.log(teste);
console.log(insertionSort(teste));
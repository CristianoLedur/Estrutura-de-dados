function bubbleSort(lista) {
  n = lista.length;
  for(let i = 0; i < lista.length; i++) {
    let ordenado = true;
    for(let j = 0; j < n - i - 1; j++) {
      if(lista[j] > lista[j+1]) {
        let aux = lista[j];
        lista[j] = lista[j+1];
        lista[j+1] = aux;
        ordenado = false;
      }
    }
    if (ordenado) {
      break;
    }
  }
  return lista;
}

let teste = [10, 8, 7, 4, 3, 11, 13, 15, 10, 11, 1, 4, 7];
console.log(teste);
console.log(bubbleSort(teste));
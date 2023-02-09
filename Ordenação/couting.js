function coutingSort(lista) {
  let maxValue = Math.max(...lista);
  let countingArray = new Array(maxValue + 1).fill(0);
  for (let i = 0; i < lista.length; i++) {
    countingArray[lista[i]]++;
  }
  let sortedArray = [];
  for (let i = 0; i < countingArray.length; i++) {
    for (let j = 0; j < countingArray[i]; j++) {
      sortedArray.push(i);
    }
  }
  return sortedArray;
}

let teste = [10, 8, 7, 4, 3, 11, 13, 15, 10, 11, 1, 4, 7];
console.log(teste);
console.log(coutingSort(teste));
// Pesquisa binaria com recursividade

function pesquisaBinariaRecursiva(lista, esquerda, direita, item) {
  // 1. Caso base: o elemento não está presente. 
  if (direita < esquerda) {
    return -1;
  }
  const meio = Math.floor((esquerda + direita) / 2);
  // 2. Nosso palpite estava certo: o elemento está no meio do arranjo. 
  if (lista[meio] === item) {
    return meio;
  } 
  // 3. O palpite estava errado: atualizamos os limites e continuamos a busca.
  else if (lista[meio] > item) {
    return pesquisaBinariaRecursiva(lista, esquerda, meio - 1, item);
  } 
  //  lista[meio] < item
  else {
    return pesquisaBinariaRecursiva(lista, meio + 1, direita, item);
  }
}

// Pesquisa binária sem recursividade

function pesquisaBinaria(lista, item) {
  let esquerda = 0;
  let direita = lista.length - 1;
  while (esquerda <= direita) {
    const meio = Math.floor((esquerda + direita) / 2);
    if (lista[meio] === item) {
      return meio;
    } else if (lista[meio] > item) {
      direita = meio - 1;
    } 
    // lista[meio] < item 
    else {
      esquerda = meio + 1;
    }
  }
  return -1;
}

teste = [0, 10, 20, 30, 40, 50, 60, 70];

console.log(pesquisaBinariaRecursiva(teste,0,teste.length,20));
console.log(pesquisaBinaria(teste,70));
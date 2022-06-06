const saldoContas = [100, 200, 40, 1.9, 300, 1000, 9.99];

const total = saldoContas.reduce( (acumulador, valor) => {
    console.log('acumulador', acumulador);
    console.log('valor', valor);
    return acumulador + valor
});

console.log(total);

/**
 * Adicionando e removendo itens do array
 */

let frutas = new Array('Abacaxi');

/**
 * O push faz o item ser adicionando no fim do array
 */
frutas.push('Banana');
frutas.push('Mamão');
frutas.push('Maçã');
frutas.push('Uva');
/**
 * O unshift faz o item ser adicionando no inicio do array
 */
frutas.unshift('Morango');

console.table(frutas);
console.log(frutas.length);

/**
 * O pop faz remover o ultimo item do array
 */
frutas.pop();

/**
 * O shift faz remover o primeiro item do array
 */
frutas.shift();

/**
 * O splice faz remover por parâmetros.
 * Onde o primeiro valor vai ser a partir de qual quer que seja removido e o
 * segundo valor é a quantidade a ser removido.
 * Ainda tem a possibilidade de passar o terceiro parâmentro, que nesse caso no lugar
 * de remover a fruta, vai trocar a fruta
 */
 const frutaRemovida = frutas.splice(2, 1);

 /**
 * Ainda tem a possibilidade de passar o terceiro parâmentro, que nesse caso no lugar
 * de remover a fruta, vai trocar a fruta
 */
  frutas.splice(2, 1, 'Fruta pão');

console.log(frutaRemovida);
console.table(frutas);
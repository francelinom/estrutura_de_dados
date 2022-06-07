/**
 * Utilizando o map vai retornar um novo array com novos elementos.
 * Não é uma boa prática utilizar o map.
 */
const aPagarEmReais = [10, 20, 30, 40, 100];
const cotacaoDolar = 5;
const aPagarEmDolar = aPagarEmReais.map((valor) => valor * cotacaoDolar);

console.table(aPagarEmReais);
console.table(aPagarEmDolar);

/**
 * Utilizando o filter vai filtrar só os valores que a condição for verdadeira
 */

const aPagar = [10, 20, 30, 40, 100];
const aPagarFran = aPagarEmReais.filter((valor) => valor > 30);

console.table(aPagarFran);

/**
 * Utilizando o find vai retornar um valor da primeira ocorrência da condição,
 * uma vez feito ele para de interar o array. Retorno é um valor e NÃO um array
 */

const pagar = [10, 20, 30, 40, 100];
const pagarFran = pagar.find((valor) => valor > 30);

console.table(pagarFran);

/**
 * Utilizando o findIndex vai retornar o index da primeira ocorrência da condição,
 * uma vez feito ele para de interar o array. Retorno é index
 */

const pagarIndex = [10, 20, 30, 40, 100];
const aPagarFranIndex = pagarIndex.findIndex((valor) => valor > 30);

console.table(aPagarFranIndex);

/**
 * Utilizando o reduce é possível passar um acumulador para acada interação, sendo possível
 * fazer uma ação no array completo.
 */

const aPagarReduce = [10, 20, 30, 40, 100];
const totalAPagar = aPagarReduce.reduce((acumulador, valor) => {
  return acumulador + valor;
});

console.log(totalAPagar);

/**
 * Utilizando o every testa se todos os elementos do array estão de acordo com uma condição.
 * Caso pelo menos um elemento não esteja de acordo o retorno vai ser false.
 */

const aPagarEvery = [10, 20, 30, 40, 100];
const contasBaixas = aPagarEvery.every((valor) => valor < 101);

console.log(contasBaixas);

/**
 * Utilizando o some retorna true ou false se pelo menos uma das condições for atendida.
 */

const aPagarSome = [10, 20, 30, 40000, 100];
const temContasAlta = aPagarSome.some((valor) => valor > 1000);

console.log(temContasAlta);

/**
 * Utilizando o concat vai unir dois array com valores passado por parâmetros.
 */

const contasDuda = [10, 20, 30, 40, 50];
const contasSaul = [1, 2, 3, 4, 5];
const contasJuntas = contasDuda.concat(contasSaul);

console.table(contasJuntas);

/**
 * Utilizando o fill preencher todo o array com um unico valor.
 */
contasJuntas.fill(0);

console.table(contasJuntas);

/**
 * Utilizando o flat vai transformar um sub array em um unico array.
 * Isso é feito de forma recursiva
 */

const arrayDuplo = [10, 20, 30, 40, [1, 2, 3, 4], [11, 22, 33, 44]];
const arrayJuntos = arrayDuplo.flat();

console.table(arrayJuntos);

/**
 * Utilizando o sort vai ordenar o array. Para controlar a ordenação é necessário
 * fazer uma função callback
 */

const clientes = [
  ["Fran", 1.1],
  ["Duda", 2],
  ["Dudu", 5],
  ["João", 4.5],
  ["Pedro", 2.5],
];
console.table(clientes);
clientes.sort((a, b) => b[1] - a[1]);
console.table(clientes);

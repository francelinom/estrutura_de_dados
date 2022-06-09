/** No dicionario o foco sempre vai ser a chave e o valor */
const meuDicionario = new Map();
meuDicionario.set('oi', 'Oi tudo bem?');
meuDicionario.set('blz', 'beleza');
meuDicionario.set('vc', 'você');

console.table(meuDicionario);

/** Para retornar o valor do dicionario é só fazer um get na chave */
const palavra = meuDicionario.get('oi'); // Vai ser atribuido 'Oi tudo bem?'
console.log(palavra);

/** Para remover uma chave utiliza o metodo remove(). 
 * Se colocar um remove é uma chave que não exite o retorno será false*/
/** Para limpar utiliza o metodo clear()*/

const dicionario = new Map();
const indiceContatos = [
    ['Fran', '9999-9999'],
    ['Milene', '8888-8888'],
    ['Saul', '7777-7777'],
    ['Dudu', '6666-6666'],
];

/** Um caso onde vai ser permitido inserir com valores iguais.
 * Isso acontece porque são objetos diferente e com valores iguais.
 */
//dicionario.set(['Fran', '9999-9999']);
dicionario.set(indiceContatos[0], {nascimento: '01/09/1989'});
dicionario.set(indiceContatos[1], {nascimento: '22/04/1994'});
dicionario.set(indiceContatos[2], {nascimento: '23/06/2021'});
dicionario.set(indiceContatos[3], {nascimento: '10/02/2009'});
console.table(dicionario);

/** Recuperando data de nascimento do Fran */
const fran = dicionario.get(indiceContatos[0]);
console.log(fran);

dicionario.forEach((valor, chaves) => {
    console.log('-', valor);
    console.log('-', chaves);
})



/** Aqui vai trabalhar com chaves e valor */
for (let entradas of meuDicionario.entries()) {
    console.log('entradas ->', entradas);
}

/** Aqui vai trabalhar só com o valor */
for (let valor of meuDicionario.values()) {
    console.log('valor ->', valor);
}

/** Aqui vai trabalhar só com o chave */
for (let chave of meuDicionario.keys()) {
    console.log('chave ->', chave);
}

/** Para saber quantos elementos existe no dicionario utiliza o size */
console.log(meuDicionario.size);

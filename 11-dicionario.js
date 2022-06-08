/** No dicionario o foco sempre vai ser a chave e o valor */
const meuDicionario = new Map();
meuDicionario.set('oi', 'Oi tudo bem?');
meuDicionario.set('blz', 'beleza');
meuDicionario.set('vc', 'você');

console.table(meuDicionario);

/** Para retornar o valor do dicionario é só fazer um get na chave */
const palavra = meuDicionario.get('oi'); // Vai ser atribuido 'Oi tudo bem?'

console.log(palavra);
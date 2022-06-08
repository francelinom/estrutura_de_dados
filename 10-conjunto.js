/** No conjunto o foco sempre vai ser o valor */
const meuConjunto = new Set();
/** o Set não deixa valores repetidos no conjunto */
const times = ["São Paulo", "Flamengo", "Santos", "Botafogo", "Flamengo"];
const meuCampeonato = new Set(times);

console.table(meuCampeonato);

const meuConjunto2 = new Set();
meuConjunto2.add("Francelino");
meuConjunto2.add("Francelino");
meuConjunto2.add(1989);
meuConjunto2.add(true);
/** Aqui vai imprimir os valores iguais porque o set entende que são objetos diferente, por esse motivo vai sair iguais */
meuConjunto2.add(["Francelino", "Saul"]);
const meuArray = ["Francelino", "Saul"];
meuConjunto2.add(meuArray);
meuConjunto2.add({ nome: "Saul" });

//meuConjunto2.delete(meuArray);
//console.table(meuConjunto2);
//meuConjunto2.clear(); //limpa todo o array

meuConjunto2.forEach((valor) => {
    console.table(valor);
})

/** O values vai ser trabalhado com os valores do conjunto */
const valoresConjunto = meuConjunto2.values();
console.table(`-> ${valoresConjunto.next().value}`);
console.table(`-> ${valoresConjunto.next().value}`);

/** O entries vai trabalhar com objetos do conjunto*/
const entradas = meuConjunto2.entries();
for(let valor of entradas) {
    console.log(valor);
}

/** O has verifica se tem aquele valor no conjunto */
const minhaFamilia = new Set(['Fran', 'Saul', 'Milene', 'Bruce']);
if (!minhaFamilia.has('Gato Alex')) {
    minhaFamilia.add('Gato Alex');
}

console.table(minhaFamilia);
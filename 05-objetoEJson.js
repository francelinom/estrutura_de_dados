/** Definir um objeto */
const programador = {
  nome: "Francelino",
  nascimento: "01/09/1989",
  casado: true,
  linguagensFavorita: ["JavaScript", "TypeScript"],
  trabalhoDesde: 2020,
};

console.table(programador);
console.log(programador.linguagensFavorita);

/** Classes */
class Programador {

    constructor(nome, nascimento, casado, linguagensFavorita = [], trabalhoDesde = null) {
        this.nome = nome;
        this.nascimento = nascimento;
        this.casado = casado;
        this.linguagensFavorita = linguagensFavorita;
        this.trabalhoDesde = trabalhoDesde;
    }
}

const fran = new Programador('Francelino', '01/09/1989', true, ['JavaScript', 'TypeScript'], 2021);
const duda = new Programador('Milene', '22/04/1994', true, ['TypeScript'], 2020);

console.table(fran);
console.table(duda);

/** Pecorrendo um objeto com o for in */

for (const propriedade in fran) {
    console.log(`${propriedade}: ${fran[propriedade]}`);
}
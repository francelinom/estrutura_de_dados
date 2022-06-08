/** Principais operações em listas
 * Insertion -> Adiciona elementos
 * Deletion -> Remove elementos
 * Traversal -> Percorre por cada elemento
 * Search -> Busca um elemento específico
 *
 * insertFirst -> insere um elemento (nó) no início da lista
 * insertLast -> insere um elemento (nó) no fim da lista
 * insertAt -> insere um elemento (nó) na posição indicada
 * deleteAt -> remove um elemento (nó) na posição indicada
 * searchAt -> Encontra um elemento (nó) de acordo com a posição indicada
 * traversal -> Percorre todos os elementos (nós)
 * indexOf -> Retorna a posição de acordo com o valor do elemento (nó)
 */

class No {
  constructor(elemento) {
    this.elemento = elemento;
    this.proximo = undefined;
  }
}

class ListaEncadeada {
  constructor() {
    this.head = undefined;
  }

  insertFirst(elemento) {
    const novo = new No(elemento);
    let atual;

    if (!this.head) {
      this.head = novo;
    } else {
      atual = this.head;
      novo.proximo = atual;
      this.head = novo;
    }

    return elemento;
  }

  insertLast(elemento) {
    const novo = new No(elemento);
    let atual;

    if (!this.head) {
      this.head = novo;
    } else {
      atual = this.head;
      while (atual.proximo) {
        atual = atual.proximo;
      }
      atual.proximo = novo;
    }
    return elemento;
  }

  searchAt(posicao) {
    let atual = this.head;
    for (let i = 0; i < posicao && atual; i++) {
      atual = atual.proximo;
    }

    return atual;
  }

  insertAt(elemento, posicao) {
    const novo = new No(elemento);
    if (posicao == 0) {
      this.insertFirst(elemento);
    } else {
      const anterior = this.searchAt(posicao - 1);
      const atual = anterior.proximo;
      novo.proximo = atual;
      anterior.proximo = novo;
    }
    return elemento;
  }

  traversal() {
    if (!this.head) {
      return undefined;
    } else {
      let atual = this.head;
      let elementoLista = [];
      while (atual) {
        elementoLista.push(atual.elemento);
        atual = atual.proximo;
      }
      return elementoLista;
    }
  }

  deleteAt(posicao) {
      let atual = this.head;
      if (posicao == 0) {
          this.head = atual.proximo;
      } else {
          let anterior = atual;
          for (let i = 0; i < posicao; i++) {
              anterior = atual;
              atual = atual.proximo;
          }
          anterior.proximo = atual.proximo;
      }
      return posicao;
  }

  indexOf(elemento) {
    let atual = this.head;
    let contador = 0;
    while (atual) {
        if (atual.elemento == elemento) {
            return contador;
            break
        } else {
            atual = atual.proximo;
            contador++;
        }
    }
    return undefined;
  }

}

const lista = new ListaEncadeada();
console.log(lista.insertFirst("teste"));
console.log(lista.insertLast("teste 1"));
console.log(lista.insertLast("teste 2"));
console.log(lista.searchAt(2));
console.log(lista.insertFirst("novo teste"));
console.log(lista.insertAt("novo teste 01", 3));
console.log(lista.deleteAt(3))
console.log(lista.deleteAt(1))
console.log(`Posição do teste 1: ${lista.indexOf('teste 1')}`);
console.log(`Posição do teste 2: ${lista.indexOf('teste 2')}`);
console.table(lista.traversal());

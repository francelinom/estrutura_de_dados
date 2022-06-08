class Pilha {
    constructor() {
        this.itens = []
    }

    /** Vai incluir um item no topo da pilha. */
    push(item) {
        this.itens.push(item);
    }

    /** Vai remover o ultimo item da pilha. */
    pop() {
        this.itens.pop();
    }

    /** Vai dizer qual o ultimo item da pilha. */
    top() {
        return this.itens[this.itens.length - 1];
    }

    /** Vai dizer se tem item da pilha retorna true ou false. */
    isEmpty() {
        return this.itens.length === 0;
    }
}

const pilha = new Pilha();
pilha.push(10);
pilha.push(20);
pilha.push(30);
pilha.push(40);

pilha.pop()

console.table(pilha);
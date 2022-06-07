/**
 * Principais operações em filas:
 * enqueue -> Insere um novo elemento
 * dequeue -> Remove o primeiro elemento
 * front/peek -> Retorna o primeiro elemento
 * isEmpty -> Retorna um valor do tipo Boolean indicando se a fila está ou não vazia
 * isFull -> Retorna um valor do tipo Boolean indicando se a fila está ou não cheia
 * rear -> Retorna o último elemento
 */
class Fila {
    constructor() {
        this.itens = [];
    }

    enqueue(item) {
        this.itens.push(item);
    }

    isEmpty() {
        return this.itens.length == 0;
    }

    dequeue() {
        if (this.isEmpty())  {
            return undefined;
        }

        return this.itens.shift();
    }

    front() {
        return this.itens[0];
    }

    rear() {
        return this.itens[this.itens.length - 1];
    }

}

const fila = new Fila();
fila.enqueue('Ferrari');
fila.enqueue('Fusca');
fila.enqueue('Gol');
fila.enqueue('Fiat Uno');

fila.dequeue();

console.table(fila);
console.table(fila.isEmpty());
console.table(fila.front());
console.table(fila.rear());
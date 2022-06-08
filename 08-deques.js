/**
 * Principais operações em deques:
 * insertFront -> Insere um elemento na frente
 * insertLast -> Insere um elemento na cauda
 * deleteFront -> Remove o elemento que está na frente
 * deleteLast -> Remove o elemento que está na cauda
 * front -> Retorna o elemento que está na frente
 * rear -> Retorna o elemento que está na cauda
 * isEmpty -> Retorna um valor do tipo Boolean indicando se o deque está ou não vazio
 * isFull -> retona um valor do tipo Boolean indicando se o deque está ou não cheio
 */

class Deque {
    constructor() {
        this.itens = [];
    }

    insertFront(item) {
        return this.itens.unshift(item);
    }

    insertLast(item) {
        return this.itens.push(item);
    }

    isEmpty() {
        return this.itens.length == 0;
    }

    deleteFront() {
        if (this.isEmpty())  {
            return undefined;
        }

        return this.itens.shift();
    }

    deleteLast() {
        if (this.isEmpty())  {
            return undefined;
        }
        return this.itens.pop();
    }

    front() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.itens[0]
    }

    rear() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.itens[this.itens.length - 1]
    }
}

const deque = new Deque();
deque.insertFront(10);
deque.insertFront(20);
deque.insertFront(30);
deque.insertFront(40);

deque.insertLast(100);
console.log(deque.front());
console.log(deque.rear());
console.table(deque.itens);

deque.deleteFront();
deque.deleteLast();

console.table(deque.itens);

/** Métodos da classe HashTable
 * hash -> Conversão de chave em um hash
 * put -> Adiciona um novo elemento
 * get -> Retorna um elemento
 * delete -> Remove um elemento
 * clear -> Remove todos os elementos
 */

class HashTable {
  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }

  _hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  put(key, value) {
    const index = this._hash(key);
    this.table[index] = [key, value];
    this.size++;
  }

  get(key) {
    const index = this._hash(key);
    return this.table[index];
  }

  delete(key) {
    const index = this._hash(key);
    if (this.table[index] && this.table[index].length) {
      this.table[index] = undefined;
      this.size--;
      return true;
    } else {
      return false;
    }
  }

  clear() {
    this.table = [];
    this.size = 0;
  }
}

const meusContatos = new HashTable();
meusContatos.put("Fran", "9999-9999");
meusContatos.put("Duda", "8888-8888");
meusContatos.put("Saul", "7777-7777");
meusContatos.put("Dudu", "6666-6666");

console.table(meusContatos.table);
console.table(meusContatos.get("Saul"));

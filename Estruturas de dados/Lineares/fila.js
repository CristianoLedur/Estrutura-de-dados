class Node {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }

  toString() {
    return `${this.value} -> ${this.next}`;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.first === null) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size += 1;
  }

  dequeue() {
    const data = this.first.value;
    this.first = this.first.next;
    if (this.first === null) {
      this.last = null;
    }
    this.size -= 1;
    return data;
  }

  toString() {
    return `[${this.first}]`;
  }
}

let queue = new Queue();

console.log("Fila vazia");
console.log(queue.toString());

queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");
queue.enqueue("D");
queue.enqueue("E");

console.log("Fila cheia");
console.log(queue.toString());

while (queue.first != null) {
    let data = queue.dequeue();
    console.log(`Removendo elemento (${data}) que está no começo da fila`);
    console.log(queue.toString());
}
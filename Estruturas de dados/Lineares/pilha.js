class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = new Node("head");
    this.size = 0;
  }

  toString() {
    let cur = this.head.next;
    let out = "";
    while (cur) {
      out += cur.value + "->";
      cur = cur.next;
    }
    return out.slice(0, -2);
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Peeking from an empty stack");
    }
    return this.head.next.value;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.head.next;
    this.head.next = node;
    this.size += 1;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Popping from an empty stack");
    }
    const remove = this.head.next;
    this.head.next = this.head.next.next;
    this.size -= 1;
    return remove.value;
  }
}

const p1 = new Stack();
p1.push("G");
p1.push("M");
p1.push("P");
console.log(p1.toString());
const p2 = new Stack();
const p3 = new Stack();
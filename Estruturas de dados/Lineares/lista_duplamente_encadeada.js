class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class ListaDuplamenteEncadeada {
  constructor(array) {
    this.head = new Node("head");
    this.tail = new Node("tail");
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
  }

  append(value) {
    const node = new Node(value);
    node.prev = this.tail.prev;
    node.next = this.tail;
    this.tail.prev.next = node;
    this.tail.prev = node;
    this.size++;
  }

  insert(index, value) {
    let cur = this.head.next;
    let curIndex = 0;

    while (curIndex < index && cur !== this.tail) {
      cur = cur.next;
      curIndex++;
    }
    const node = new Node(value);
    node.prev = cur.prev;
    node.next = cur;
    cur.prev.next = node;
    cur.prev = node;
    this.size++;
  }

  pop(index) {
    let cur = this.head.next;
    let curIndex = 0;
    while (curIndex < index && cur !== this.tail) {
      cur = cur.next;
      curIndex++;
    }
    cur.prev.next = cur.next;
    cur.next.prev = cur.prev;
    this.size--;
    return cur.value;
  }

  remove(value) {
    let cur = this.head.next;
    while (cur !== this.tail) {
      if (cur.value === value) {
        cur.prev.next = cur.next;
        cur.next.prev = cur.prev;
        this.size--;
        break;
      }
      cur = cur.next;
    }
  }

  indexOf(value) {
    let cur = this.head.next;
    let curIndex = 0;
    while (cur !== this.tail) {
      if (cur.value === value) {
        return curIndex;
      }
      cur = cur.next;
      curIndex++;
    }
    return -1;
  }

  count(value) {
    let cur = this.head.next;
    let count = 0;
    while (cur !== this.tail) {
      if (cur.value === value) {
        count++;
      }
      cur = cur.next;
    }
    return count;
  }

  toString() {
    let cur = this.head.next;
    let out = "";
    while (cur !== this.tail) {
      out += cur.value + " <--> ";
      cur = cur.next;
    }
    return out.slice(0, -4);
  }
}

const lista = new ListaDuplamenteEncadeada();
lista.append("P");
lista.append("M");
lista.append("G");
lista.append("GG");
console.log(lista.toString());

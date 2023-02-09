class Node{
  constructor(data, next = null, previous = null){
      this.data = data;
      this.next = next;
      this.previous = previous;
  }
}

class ListaDuplamenteEncadeada {
  constructor(head = null, tail = null, count = 0){
      this.head = head;
      this.tail = tail;
      this.count = count;
  }

  getHead(){
    if (this.head) {
      return this.head.data;
    }
    return null;
  }

  getTail(){
    if (this.tail) {
      return this.tail.data;
    }
    return null;
  }

  GetCount(){
    return this.count;
  }

  MostrarTudo(){
    if (this.head){
      let arr = [];
      let current = this.head;
      for (let i = 0; i < this.count; i++){
        arr[i] = current.data;
        current = current.next;
      }
      return arr;
    } else {
      return null;
    }
  }

  MostrarFimInicio(){
    if (this.head){
      let arr = [];
      let current = this.tail;
      for (let i = 0; i < this.count; i++){
        arr[i] = current.data;
        current = current.previous;
      }
      return arr;
    } else {
      return null;
    }
  }

  VisualizarEm(index){
    if (index > -1 && index < this.count){
      let current = this.head;
      let i = 0;
      while (i++ < index){
        current = current.next;
      }
      return current.data;
    } else {
      return null;
    }
  }

  AdicionarInicio(data){
    let no = new Node(data);
    no.next = this.head;
    this.head = no;
    if (this.count === 0){
      this.tail = this.head;
    } else {
      this.head.next.previous = this.head;
    }
    this.count++;
  }

  AdicionarFinal(data){
    let no = new Node(data);
    no.previous = this.tail;
    if (this.count === 0){
      this.head = no;
    } else {
      this.tail.next = no;
    }
    this.tail = no;
    this.count++;
  }

  AdicionarEm(data, index){
    if (index > 0 && index < this.count){
      let no = new Node(data);
      let current = this.head;
      let i = 0;

      while(i++ < index){
        current = current.next;
      }

      current.previous.next = no;
      no.next = current;
      no.previous = current.previous;
      current.previous = no;
            
      this.count++;
    } else if (index < 1){
      this.AdicionarInicio(data);
    } else {
      this.AdicionarFinal(data);
    }
  }

  RemoverInicio(){
    if (this.head){
      this.head = this.head.next;
      this.count--;

      if (this.count === 0){
        this.tail = null;
      } else {
        this.head.previous = null;
      }
    }
  }

  RemoverFinal(){
    if(this.head){
      if(this.count === 1){
        this.head = null;
        this.tail = null;
      } else {
        this.tail.previous.next = null;
        this.tail = this.tail.previous;
      }
      this.count--;
    }
  }

  RemoverEm(index){
    if (index > 0 && index < this.count-1){

      let current = this.head;
      let i = 0;

      while( i++ < index){
        current = current.next;
      }

      current.previous.next = current.next;
      current.next.previous = current.previous;

      this.count--;
    } else if (index < 1){
      this.RemoverInicio();
    } else {
      this.RemoverFinal();
    }
  }
}

let lista = new ListaDuplamenteEncadeada();
lista.AdicionarInicio(1);
lista.AdicionarInicio(4);
lista.AdicionarInicio(5);
lista.AdicionarInicio(6);
lista.AdicionarFinal(2);
lista.AdicionarEm(3, 1);
console.log(lista.VisualizarEm(1));
console.log(lista.MostrarFimInicio());
lista.RemoverEm(2);
lista.RemoverInicio();
lista.RemoverFinal();
console.log(lista.MostrarTudo());
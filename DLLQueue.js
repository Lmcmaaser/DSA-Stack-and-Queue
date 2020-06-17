// create queue using doubly linked list
// Use the items listed starTrekQ and enqueue them to your queue.
// Check to see who is first one on the Queue?

//I honestly have no idea what this assignment is asking for. Kirk
// Checkov would be the prev node to Kirk (first in)
class Node {
  constructor(value){
    this.value = value; // data
    this.prev = null; // reference to the prev node
    this.next = null; // reference to next node
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null; // first node in the list
    this.tail = null; // last node in the list
    this.length = null;
  }
  push(data){
    const node = new Node(data);
    if(!this.head){
      this.head = node;
      this.tail = node;
    }else{
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;

    }
    this.length++;
  }

  pop() {
    if(!this.head) return null
    // tail is the last node so we take the prev property from the tail
    const prevNode = this.tail.prev
    if (prevNode) {
       prevNode.next = null;
       this.tail = prevNode; // updating the tail
    } else {
      // if  prev property is null
      // it means there is only single node
      this.head = null;
      this.tail = null;
    }
    this.length--; //decrement the length
  }

  insertBeginning(data) {
    // new node is created
    const node = new Node(data);
    // if there is no nodes
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      // update the head.prev to the new node
      // take the new node.next property and link it to the head property
      this.head.prev = node
      node.next = this.head;
      this.head = node;
    }
    // increment the length
    this.length++;
  }
  removeFirst() {
    if (!this.head) {
      return null
    }
    // storing the second node
    const node = this.head.next;
    if (node) {
      // removing the previous node
      node.prev = null
      // updating the head
      this.head = node
    } else {
      // only one node so we update head and tail to null
      this.head = null
      this.tail = null
    }
    //decrement the length
    this.length--;
  }
}

function Main() {
  let starTrekQ = new Queue();
  starTrekQ.enqueue('Kirk'); // first in first out
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');
  starTrekQ.peek();
}

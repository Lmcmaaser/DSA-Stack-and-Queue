// A queue is a data structure that models a FIFO (First In First Out) operation.
// Queues are used to store data in the order in which they occur

// Creates a node containing the data and a reference to the next item
class _Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(data) {
    const node = new _Node(data);
    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
  } // time complexity of inserting an item in a queue is constant, O(1)
  dequeue(data) {
    //if queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next; //our singly linked list
    //if node is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  } // time complexity of removing an item from a queue is constant, O(1)
}
module.exports = Queue;

// I think...
function peek(data) {
  if (this.first === null) {
    return console.log('queue is empty');
  } else {
    return this.data[this.data.length - 1];
  }
}

function isEmpty(data) {
  if (this.first === null) {
    return this.data.length == 0;
  }
}
 // I think...
function display(data) {
  if (this.first === null) {
    return console.log('queue is empty');
  }
  const node = this.first;
  while (this.first !== null) {
    this.first = this.first.next;
  }
  console.log(node.data);
}

function Main() {
  let starTrekQ = new Queue();
  starTrekQ.enqueue('Kirk'); // first in first out
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');
  starTrekQ.peek();
  starTrekQ.dequeue('Kirk');
  starTrekQ.dequeue('Spock');
}

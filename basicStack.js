// standard way to implement a stack is using a singly linked list
// LIFO (like a stack of plates or a can of pringles)
// Creates a node containing the data and a reference to the next item
class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  // insertion operation (push) is limited to only inserting onto the top of the stack
  push(data) {
  // If the stack is empty, then the node will be the top of the stack
    if (this.top === null) {
        this.top = new _Node(data, null);
        return this.top;
    }
    // If the stack already has something in it, create a new node, add data to the new node, and have the pointer point to the top
    const node = new _Node(data, this.top);
    this.top = node;
    // (Since we are only adding to the top of the stack, the time complexity of inserting on a stack is constant, O(1).)
  }
  // removal operation (pop) is also limited to the top of the stack
  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
    // (Since we are removing only from the top of the stack, the time complexity of removing an item from a stack is constant, O(1).)
  }
}
module.exports = Stack;

function display(data) {
  if (this.top === null) {
    return console.log('The stack is empty.');
  }
  let node = this.top;
  while (node.next !== null) {
    console.log(node.data);
    node = node.next;
  }
  console.log(node.data);
}

function peek(data) {
  if (this.top === null) {
    return console.log('The stack is empty.');
  } else {
    return this.data[this.data.length - 1];
  }
}

function isEmpty(data) {
  if (this.top === null) {
    // return true if stack is empty
    return this.items.length == 0;
  }
}


function main() {
  const starTrek = new Stack;
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  starTrek.pop('Scotty');
  starTreck.pop('McCoy')
  starTrek.display();
}

// rear -> Kirk, Spock, McCoy, Scotty <- top
main();

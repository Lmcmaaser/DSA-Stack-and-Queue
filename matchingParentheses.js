// A stack can be used to ensure that an arithmetic expression has balanced parentheses.
// Write a function that takes an arithmetic expression as an argument and returns true or false based on matching parenthesis. Provide a meaningful error message to the user as to what's missing.
// Finding a close parenthesis without an open parenthesis is an error (report the location of the close); reaching the end of the string while still "holding" an open parenthesis is also an error (report the location of the open).

//probably works
'use strict';
const Stack = require('./basicStack.js');

function matchParentheses(s) {
  const stack = new Stack()
  for (let i = 0; i < s.length; i++) {
    //if there is an open '(' found, add it to stack
    if (s[i] === '(') {
      stack.push(s[i])
      console.log('open parenthesis found');
    } else if (s[i] === ')') {
      if (stack.pop() !== '(') {
        console.log('closed parenthesis with no open parenthesis found');
      }
    }
  }
  if (stack.pop() === '(') {
    console.log('open parenthesis with no closed parenthesis found');
  } else {
    console.log('success, no incorrect parensthesis');
  }
}

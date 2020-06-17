// A palindrome is a word, phrase, or number that is spelled the same forward and backward.
// Write an algorithm that uses a stack to determine whether a given input is palindrome or not. Use the following template as a starting point:

// function is_palindrome(s) {
//     s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
//     // Your code goes here
// }
//
// // True, true, true, false
// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));


//this is potentially correct
'use strict';
const Stack = require('./basicStack.js');
 //app will reverse a stack and then compare data from original stack and reversed stack
 // s = string
function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const stack = new Stack(); //original stack
  //push each leter of the string into stack
  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
  }
  // variable to store the reverse ordered string
  let reverse = '';
  // While the top isn't null, pop the values off the stack and add to string
  while ( stack.top !== null ) {
    reverse += stack.pop();
  }
  // Validate if both strings are the same
  console.log(s);
  console.loge(reverse)
  if (s === reverse) {
    return true
  } else {
    return false
  }
}

console.log(is_palindrome('dad')); //true
console.log(is_palindrome('A man, a plan, a canal: Panama'));
console.log(is_palindrome('1001')); //true
console.log(is_palindrome('Tauhida')); //false

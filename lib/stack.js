'use strict';
import Node from './node.js';
  
class Stack {
  constructor() {
    this.top = null;
  }
  //push acts as the append building the LL from zero if one doesnt exist already

  push(value) {
    let node = new Node(value);
    if (!this.top) {
      // console.log('Push Not Top:', this);

      this.top = node;
      return this.top;
    }

    // console.log('Push Top:', this);
    let oldTop = this.top;
    this.top = node;
    this.top.next = oldTop;
    return this.top;
  }
  
  pop() {
    let current = this.top;
    if (!current.next) {
      this.top = null;
      return current.value;
    }
    let oldTop = current.value;
    this.top = this.top.next;
    return oldTop;
  }

  serialize() {
    let current = this.top;
    let seriStr ='';

    while(current) {
      seriStr += `[${current.value}] -> `;
      if(current.next === null) {
        seriStr += `[X]`;
      }
      current = current.next;
    }
    return seriStr;
  }

  static deserialize(str) {
    //Input =  [3] -> [2] -> [X]
    let newStack = new Stack;
    let newStr = str.split('[');
    // console.log('STRING:',newStr);
    //handle X where it skips it maybe with a continue
    // invert the for loop
    for (let i = newStr.length-1; i >= 0; i--) {
      if(/\]/.test(newStr[i])) {
        let split = newStr[i].split(']')[0];
        // not newStr[i] in the conditional because that changing but split is the value we are cheking for
        if(split === 'X') {
          continue;
        }
        // console.log('SPLIT: ',split);
        newStack.push(parseInt(split)); 
      }
    }
    return newStack;
  }
}
export default Stack;




//split conditions look for opening [,  
//loop through string and everything before the ]
// regex
// newStr[i].includes(regex)


//if(/\]/.test(newStr[i])) { 
// let split value = newStr[i].split(']')[0]
//gives back an array with two value so you say [0] to get the first pack
// }


// if(typeof(parseInt(newStr[i])) === 'number') {
//   // console.log('parseInt: ',newStr[i]);
//   value += newStr[i];
//   // console.log('Value: ',value);
//   newStack.push(value); 
// }


// for (let j = i+1; j < newStr.length; j++) {
//   if (newStr[j] === 'X') {
//     console.log('looking for X: ',newStr[j]);
//     newStack = new Stack;
//     console.log('Create New Stack ',newStack);
//     break;
//   }
//   if(newStr[j] === ']') {
//     break;
//   }
//   if(typeof(parseInt(newStr[j])) === 'number') {
//     console.log('parseInt: ',newStr[j]);
//     value += newStr[j];
//     console.log('Value: ',value);
//   }
// }     
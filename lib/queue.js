'use strict';
import Node from './node.js';

class Queue {
  constructor() {
    this.front = null;
  }
  
  enqueue(value) {
  
    let node = new Node(value);
    if (!this.front) {
      this.front = node;
      return this.front;
    }
    let current = this.front;
    while(current){
      if(current.next === null) {
        current.next = new Node(value);
        break;
      }
      current = current.next;
    }
    return this.front;
  }

  dequeue() {
    let oldFront = this.front;
    this.front = this.front.next;
    return oldFront.value;
  }
  
  serialize() {
    let current = this.front;
    let seriStr = '';

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
    let newQueue = new Queue;
    let newStr = str.split('[');
    for (let i = 0; i < newStr.length; i++) {
      if(/\]/.test(newStr[i])) {
        let split = newStr[i].split(']')[0];
        if(split === 'X') {
          continue;
        }
        newQueue.enqueue(parseInt(split)); 
      }
    }
    return newQueue;
  }
}

export default Queue;
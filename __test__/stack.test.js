'use strict';
import Stack from '../lib/stack.js';

describe('STACK Module', () => {

  it('PUSH STACK test', () => {
    const newStack = new Stack;
    let result = newStack.push(2);
    expect(result.value).toEqual(2);
  });

  it('POP STACK test', () => {
    const newStack = new Stack;
    let result = newStack.push(2);
    result = newStack.push(3);
    result = newStack.pop();
    expect(result).toEqual(3);
  });

  it('SERIALIZE STACK method', () => {
    const newStack = new Stack;
    let result = newStack.push(2);
    result = newStack.push(3);
    result = newStack.serialize();
    expect(result).toEqual('[3] -> [2] -> [X]');
  });

  it('DESERIALIZE STACK method', () => {
    let newStack = new Stack;
    newStack.push(2);
    newStack.push(3);
    // console.log('Result: ', result);

    let stackString = '[3] -> [2] -> [X]';

    let newStackLL = Stack.deserialize(stackString);
    // console.log('After Deserialize newStackLL: ', newStackLL);

    expect(newStackLL).toEqual(newStack);
  });
});
'use strict';
import Queue from '../lib/queue.js';

describe('QUEUE Module', () => {

  it('ENQUEUE QUEUE method', () => {
    const newQueue = new Queue;
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    expect(newQueue.front.value).toEqual(1);
  });

  it('DEQUEUE QUEUE method', () => {
    const newQueue = new Queue;
    newQueue.enqueue(1);
    newQueue.enqueue(2);

    let oldFront = newQueue.dequeue();

    expect(oldFront).toEqual(1);
    expect(newQueue.front.value).toEqual(2);
  });

  it('SERIALIZE QUEUE method', () => {
    const newQueue = new Queue;
    newQueue.enqueue(1);
    newQueue.enqueue(2);

    let string = newQueue.serialize();
    expect(string).toMatch('[1] -> [2] -> [X]');
  });

  it('DESERIALIZE QUEUE method', () => {
    const newQueue = new Queue;
    newQueue.enqueue(1);
    newQueue.enqueue(2);

    let queueString = '[1] -> [2] -> [X]';
    let deseri = Queue.deserialize(queueString);
    expect(deseri).toEqual(newQueue);
  });

});
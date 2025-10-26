const { NotImplementedError } = require('../lib/errors');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queue = [];
  }
  getUnderlyingList() {
    // Remove line below and write your code here
    if (this.queue.length === 0) return null;
    let head = { value: this.queue[0], next: null };
    let current = head;
    for (let i = 1; i < this.queue.length; i++) {
      current.next = { value: this.queue[i], next: null };
      current = current.next;
    }
    return head;
  }

  enqueue(value) {
    // Remove line below and write your code here
    this.queue.push(value);
  }

  dequeue() {
    // Remove line below and write your code here
    return this.queue.shift();
  }
}

module.exports = {
  Queue,
};

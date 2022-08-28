import ListNode from './ListNode.js';

/**
 * Реализация очереди
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // добавляет элемент в очередь
 * queue.enqueue(3);
 * queue.size(); // возвращает длину очереди, вернет 2
 * queue.isEmpty(); // возвращает true, если очередь пуста; вернет false
 * queue.front(); // возвращает первый элемент очереди, если она не пуста; вернет 1
 * queue.dequeue(); // возвращает первый элемент в очереди и удаляет его, вернет 1
 */

export default class Queue {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    size() {
        return this.length;
    }

    isEmpty() {
        return this.length === 0;
    }

    front() {
        if (this.isEmpty()) {
            return 'Queue is empty';
        }
        return this.head.value;
    }
  
    enqueue(value) {
        if (this.length === 0) {
            this.head = new ListNode(value);
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = new ListNode(value);
        }
        this.length++;
    }
  
    dequeue() {
        let current = this.head;
        this.head = current.next;
        this.length--;
        return current.value;
    }
}
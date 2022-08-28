/**
 * Реализация стека через массив
 * 
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // добавляет элемент в стэк
 * stack.length(); // возвращает длину стэка, вернет 1
 * stack.peek(); // возвращает верхний элемент, но не удаляет его из стэка, вернет 1
 * stack.pop(); // возвращает верхний элемент и удаляет его из стэка, вернет 1
 * stack.pop(); // undefined
 */

export default class Stack {
    constructor() {
      this.stack = new Array(0);
    }
  
    push(element) {
      this.stack.push(element);
    }
  
    pop() {
      return this.stack.pop();
    }
  
    peek() {
      return this.stack[this.stack.length - 1];
    }

    length() {
      return this.stack.length;
    }
}

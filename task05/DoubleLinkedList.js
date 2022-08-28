import ListNode from './ListNode';

/**
 * Реализация двусвязного списка
 * 
 * @example
 * const list = new DoubleLinkedList();
 *
 * list.add(8); // добавляет элемент в список
 * list.add(90);
 * list.add(-3);
 * list.size(); // возвращает длину списка, вернет 3
 * list.indexOf(-3); // возвращает индекс указанного элемента в списке, вернет 2
 * list.elementAt(1); // возвращает элемент по указанному индексу в списке, вернет 90
 * list.addAt(1, 456); // вставляет элемент по указанному индексу в список
 * list.removeAt(0); // удаляет элемент по указанному индексу из списка, вернет 8
 * list.remove(90); // удаляет указанный элемент из списка
 */

export default class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    size() {
        return this.length;
    }

    add(value) {
        let newNode = new ListNode(value);
        if (this.length === 0) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }
        this.tail = newNode;
        this.length++;
    }

    indexOf(element) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.value === element) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }

    elementAt(index) {
        if (index < 0 || this.length <= index) {
            return null;
        }

        let current = this.head;
        let currentIndex = 0;
        while (currentIndex < index) {
            current = current.next;
            currentIndex++;
        }
        return current.value;
    }

    addAt(index, value) {
        if (index < 0 || index > this.length) {
            return null;
        }

        let newNode = new ListNode(value);
        if (index === 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else if (index === this.length) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        } else {
            let current = this.head;
            let prev = null;
            let currentIndex = 0;
            while (currentIndex < index) {
                prev = current;
                current = current.next;
                currentIndex++;
            }
            prev.next = newNode;
            newNode.prev = prev;
            current.prev = newNode;
            newNode.next = current;
        }
        this.length++;
    }

    removeAt(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        
        let current;
        if (index === 0) {
            current = this.head;
            this.head = this.head.next;
            this.head.prev = null;
        } else if (index === this.length - 1) {
            current = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            current = this.head;
            let prev = null;
            let currentIndex = 0;
            while (currentIndex < index) {
                prev = current;
                current = current.next;
                currentIndex++;
            }
            prev.next = current.next;
            current.next.prev = prev;
        }
        this.length--;
        return current.value;
    }

    remove(element) {
        this.removeAt(this.indexOf(element));
    }
}
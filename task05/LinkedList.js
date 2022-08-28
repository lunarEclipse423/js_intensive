import ListNode from './ListNode';

/**
 * Реализация односвязного списка
 * 
 * @example
 * const list = new LinkedList();
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

export default class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    size() {
        return this.length;
    }

    add(value) {
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
        if (index < 0 || index >= this.length) {
            return null;
        }

        if (index === 0) {
            let temp = this.head;
            this.head = new ListNode(value);
            this.head.next = temp;
        } else {
            let current = this.head;
            let prev = null;
            let currentIndex = 0;
            while (currentIndex < index) {
                prev = current;
                current = current.next;
                currentIndex++;
            }
            prev.next = new ListNode(value);
            prev.next.next = current;
        }
        this.length++;
    }

    removeAt(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        
        let current = this.head;
        if (index === 0) {
            this.head = current.next;
        } else {
            let prev = null;
            let currentIndex = 0;
            while (currentIndex < index) {
                prev = current;
                current = current.next;
                currentIndex++;
            }
            prev.next = current.next;
        }
        this.length--;
        return current.value;
    }

    remove(element) {
        this.removeAt(this.indexOf(element));
    }
}

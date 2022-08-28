import TreeNode from './TreeNode.js';

/**
 * Реализация бинарного дерева поиска
 * @example
 * const tree = new BinarySearchTree();
 * 
 * tree.add(1); // добавляет узел в дерево 
 * tree.add(2);
 * tree.add(3);
 * tree.add(4);
 * tree.add(5);
 * tree.root().data; // root() возвращает корневой узел дерева, вернет 1
 * tree.find(8); // возвращает узел с указанным значением, если он хранится в дереве; вернет null
 * tree.min(); // возвращает минимальное значение, хранящееся в дереве; вернет 1
 * tree.max(); // возвращает максимальное значение, хранящееся в дереве; вернет 5
 * tree.remove(5); // удаляет узел с указанным значением из дерева, если такой узел существует
 * tree.has(5); // возвращает true, если узел с указанным значением хранится в дереве; вернет false
 * tree.max(); // вернет 4
 * 
 * dfsInOrder() // центрированный обход (in-order traversal)
 * reverseOrder() // обход в порядке убывания
 * dfsPreOrder() // прямой обход в глубину (pre-order traversal)
*/

export default class BinarySearchTree {
    constructor() {
        this.head = null;
    }
  
    root() {
        return this.head;
    }
  
    add(data) {
        if (this.head === null) {
            this.head = new TreeNode(data);
            return;
        }
        
        let current = this.head;
        let parent = current;
        while (current !== null) {
            parent = current;
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        
        if (data < parent.data) {
            parent.left = new TreeNode(data);
        } else {
            parent.right = new TreeNode(data);
        }
    }
  
    has(data) {
        let current = this.head;
        while (current !== null) {
            if (data < current.data) {
                current = current.left;
            } else if (data > current.data) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
  
    find(data) {
        let current = this.head;
        while (current !== null) {
            if (data < current.data) {
                current = current.left;
            } else if (data > current.data) {
                current = current.right;
            } else {
                return current;
            }
        }
        return null;
    }
  
    remove(data) {
        let parent = null;
        let current = this.head;
        while (current !== null) {
            if (data < current.data) {
                parent = current;
                current = current.left;
            } else if (data > current.data) {
                parent = current;
                current = current.right;
            } else {
                break;
            }
        }
        
        if (current === null) {
            return;
        }
        
        if (current.left === null && current.right === null) {
            if (current !== this.head) {
                if (parent.left === current) {
                    parent.left = null;
                } else {
                    parent.right = null;
                }
            } else {
                this.head = null;
            }
            return;
        } else if (current.left && current.right) {
            let successor = current.right;
            while (successor.left !== null) {
                successor = successor.left;
            }
            let temp = successor.data;
            this.remove(successor.data);
            current.data = temp;
        } else {
            let child = current.left ? current.left : current.right;
            if (current !== this.head) {
                if (current == parent.left) {
                    parent.left = child;
                } else {
                    parent.right = child;
                }
            } else {
                this.head = child;
            }
        }
    }
  
    min() {
        let current = this.head;
        let parent = null;
        while (current !== null) {
            parent = current;
            current = current.left;
        }
        return parent.data;
    }
  
    max() {
        let current = this.head;
        let parent = null;
        while (current !== null) {
            parent = current;
            current = current.right;
        }
        return parent.data;
    }

    dfsInOrder() {
        doLeft(this.head);
        function doLeft(node) {
            if (node) {
                doLeft(node.left);
                console.log(node.data);
                doLeft(node.right);          
            }
        }
    }

    reverseOrder() {
        doRight(this.head);
        function doRight(node) {
            if (node) {
                doRight(node.right);
                console.log(node.data);
                doRight(node.left);
            }
        }
    }

    dfsPreOrder() {
        doDeepSearch(this.head);
        function doDeepSearch(node) {
            if (node) {
                console.log(node.data);
                doDeepSearch(node.left);
                doDeepSearch(node.right);
            }
        }
    }
}

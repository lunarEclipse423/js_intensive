export default class Calculator {
    #x;
    #y;

    constructor(firstNum, secondNum) {
        if (typeof firstNum !== 'number' || typeof secondNum !== 'number' || isNaN(firstNum) || isNaN(secondNum)) {
            throw new Error('Ошибка: невалидное значение входных параметров');
        }
        this.#x = firstNum;
        this.#y = secondNum;
    }

    setX(num) {
        if (typeof num !== 'number' || isNaN(num)) {
            throw new Error('Ошибка: невалидное значение входного параметра');
        }
        this.#x = num;
    }

    setY(num) {
        if (typeof num !== 'number' || isNaN(num)) {
            throw new Error('Ошибка: невалидное значение входного параметра');
        }
        this.#y = num;
    }

    logSum() {
        console.log(this.#x + this.#y);
    }

    logMul() {
        console.log(this.#x * this.#y);
    }

    logSub() {
        console.log(this.#x - this.#y);
    }

    logDiv() {
        if (this.#y === 0) {
            throw new Error('Ошибка: деление на ноль');
        }
        console.log(this.#x / this.#y);
    }
}

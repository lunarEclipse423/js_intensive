const myIterable = {
    from: 1,
    to: 8,
    [Symbol.iterator]() {
        let start = this.from;
        let end = this.to;

        if (end < start) {
            throw new Error('Ошибка: to должно быть не меньше from');
        } else if (!start) {
            throw new Error('Ошибка: from неопределено');
        } else if (!end) {
            throw new Error('Ошибка: to неопределено');
        } else if (isNaN(start)) {
            throw new Error('Ошибка: from должно быть числом');
        } else if (isNaN(end)) {
            throw new Error('Ошибка: to должно быть числом');
        }

        return {
            next() {
                if (start <= end) {
                    return { value: start++, done: false };
                }
                return { value: undefined, done: true };
            }
        }
    }
};

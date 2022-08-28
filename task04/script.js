// Сложность O(n), где n - длина входного массива
const selectFromInterval = (arr, start, end) => {
    if (!Array.isArray(arr)) {
        throw new Error('Ошибка: невалидное значение для первого параметра');
    } else if (isNaN(Number(start))) {
        throw new Error('Ошибка: невалидное значение для второго параметра');
    } else if (isNaN(Number(end))) {
        throw new Error('Ошибка: невалидное значение для третьего параметра');
    }

    let resultArr = [];
    let leftBorder = start <= end ? start : end;
    let rightBorder = start >= end ? start : end;
    for(let i = 0; i < arr.length; i++) {
        if (isNaN(Number(arr[i]))) {
            throw new Error('Ошибка: в переданном массиве должны быть только числа');
        }
        if (arr[i] >= leftBorder && arr[i] <= rightBorder) {
            resultArr.push(arr[i]);
        }
    }

    return resultArr;
}

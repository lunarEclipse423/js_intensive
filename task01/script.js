const doBaseConversion = () => {
    let firstNum = +prompt('Введите первое значение:');
    let secondtNum = +prompt('Введите второе значение:');
    if (isNaN(firstNum) || isNaN(secondtNum)) {
        console.log('Некорректный ввод!');
        return;
    }

    console.log(firstNum.toString(secondtNum));
}

doBaseConversion();
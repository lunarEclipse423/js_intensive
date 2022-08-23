const calculation = () => {
    let firstNum = +prompt('Введите первое значение:');
    if (isNaN(firstNum)) {
        console.log('Некорректный ввод!');
        return;
    }

    let secondtNum = +prompt('Введите второе значение:');
    if (isNaN(secondtNum)) {
        console.log('Некорректный ввод!');
        return;
    }

    console.log(`Ответ: ${firstNum + secondtNum}, ${firstNum / secondtNum}.`);
}

calculation();

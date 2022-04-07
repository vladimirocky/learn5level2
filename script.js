/* ДОПИШИТЕ КОД ФУНКЦИЙ ЧТОБЫ ВСЕ РАБОТАЛО!*/

/* Реализуйте функцию подсчета факториала числа n */
function fact() {
    let n = Number(factor.value);
    let result;
    
    function factorial(n) {
        if (n != 1) {
            n = n * factorial(n-1);
        } else {
            n = 1;
        }
    return n;
    }
    
    result = factorial(n);

    resFact.innerHTML = result;
}

/* Реализуйте функцию деления по модулю X на Y */
function divByMod(){
    let X = Number(devisibleMod.value);
    let Y = Number(deviderMod.value);
    let result;
    
    result = X % Y;
    
    resDivMode.innerHTML = result;
}

/* Реализуйте функцию подсчета дней */
function computedDay(){
    let N = Number(n_level.value);
    let x = Number(x_for_day.value);
    let result = 0;
    var iterator = x;
    /**
     * Например, если N = 6 а x = 3
     * 1. день +3 - высота 3, ночь -1, выосота 2
     * 2. день +3 - высота 5, ночь -1, высота 4
     * 3. день +3 - высота 7 - успех!
     *
     * Значит ответ должен быть 3
     * данный алгоритм выдает 2
     */

    for (x; x <= N; x += iterator) {
        x--;
        result++;
    }

    resDayCount.innerHTML = result;
}

/* Реализуйте функцию подсчета конвертированной суммы*/
function convertation() {
    // Используйте коэффициэнты
    const EUR_TO_DOL = 0.9;
    const EUR_TO_RUB = 0.007;
    const DOL_TO_EUR = 1.05;
    const DOL_TO_RUB = 0.008;
    const RUB_TO_DOL = 116;
    const RUB_TO_EUR = 126;

    // В следующих переменных записываем что выбрал/ввел пользователь
    // конвертируемая сумма
    let summ = Number(currCount.value);
    // из какой валюты
    let fir_curr = selectFirCurrency.value;
    // в какую валюту
    let sec_curr = selectSecCurrency.value;

    let result;
    
    let curs = fir_curr.concat(sec_curr);

    switch (curs) {
        case '”euro””dollar”':
            result = (summ / EUR_TO_DOL);
            break;
        case '”euro””ruble”':
            result = (summ / EUR_TO_RUB);
            break;
        case '”dollar””euro”':
            result = (summ / DOL_TO_EUR);
            break;
        case '”dollar””ruble”':
            result = (summ / DOL_TO_RUB);
            break;
        case '”ruble””euro”':
            result = (summ / RUB_TO_EUR);
            break;
        case '”ruble””dollar”':
            result = (summ / RUB_TO_DOL);
            break;
        default:
            result = 'Всё поломалось(';
    }

    resCurr.innerHTML = result;
}


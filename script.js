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
    let result;
    /*
    ВАШ КОД ТУТ
    while .../ for ...
    выбирайте цикл
    как посчитаете нужным
    result =
    */
    resDayCount.innerHTML = result;
}

/* Реализуйте функцию подсчета конвертированной суммы*/
function convertation() {
    // Используйте коэффициэнты
    const UER_TO_DOL = 0.9;
    const EUR_TO_RUB = 0.007;
    const DOL_TO_EUR = 1.05;
    const DOL_TO_RUB = 0.008;
    const RUB_TO_DOL = 116;
    const RUB_TO_EUR = 126;

    // В следующих переменных записываем что выбрал/ввел пользователь
    // конвертируемая сумма
    let summ = Number(currCount.value)
    // из какой валюты
    let fir_curr = selectFirCurrency.value;
    // в какую валюту
    let sec_curr = selectSecCurrency.value;

    let result;
    /*
    ВАШ КОД ТУТ
    switch ()
        case
    result =
    */

    resCurr.innerHTML = result;
}
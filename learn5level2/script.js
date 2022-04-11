/* ДОПИШИТЕ КОД ФУНКЦИЙ ЧТОБЫ ВСЕ РАБОТАЛО!*/

/* Реализуйте функцию подсчета факториала числа n */
function fact(){
    let n = Number(factor.value);
    let factorial = (x) => {
        if (x == 0) return 1;
        return x*factorial(x-1);
    }
    result = factorial(n)
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
    if (x <= 1) result = 'Не поднимут';
    /**
     * ----------------------------------------------------
     * Предположим N = 7, x = 3
     * ответ дожен быть 3:
     * 1 день - поднять до 3, не достигли 7, опутились до 2
     * 2 день - поднять до 5, не достигли 7, опустили до 4
     * 3 день - подняли до 7 - успех!
     * ----------------------------------------------------
     */
    else result = Math.ceil(N/(x-1));
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
    let sum = Number(currCount.value)
    // из какой валюты
    let fir_curr = selectFirCurrency.value;
    // в какую валюту
    let sec_curr = selectSecCurrency.value;
    let result;
    
    switch (fir_curr) {
        case "euro": 
            switch (sec_curr) {
                case "dollar":
                    result = sum*DOL_TO_EUR;
                    break;
                case "ruble":
                    result = sum*RUB_TO_EUR;
                    break;
                default: result = sum;
            }
            break;
        case "dollar": 
            switch (sec_curr) {
                case "euro":
                    result = sum*UER_TO_DOL;
                    break;
                case "ruble":
                    result = sum*RUB_TO_DOL;
                    break;
                default: result = sum;
            }
            break;
        case "ruble": 
            switch (sec_curr) {
                case "euro":
                    result = sum*EUR_TO_RUB;
                    break;
                case "dollar":
                    result = sum*DOL_TO_RUB;
                    break;
                default: result = sum;
            }
    }
    

    resCurr.innerHTML = result;
}
/* ДОПИШИТЕ КОД ФУНКЦИЙ ЧТОБЫ ВСЕ РАБОТАЛО!*/

/* Реализуйте функцию подсчета факториала числа n */

function fact() {
    let n = Number(factor.value);
    let result;
    if (n < 0) {
        n = "значение меньше 0";
    }
    else if (n === 0) {
        n = 1;
    }
    else for(let i = n; --i; ) {
        n *= i;
    }
    result = n;
    resFact.innerHTML = result;
}

/* Реализуйте функцию деления по модулю X на Y */
function divByMod(){
    let X = Number(devisibleMod.value);
    let Y = Number(deviderMod.value);
    
    let result = (Y === 0) ? "Делить на 0 нельзя" :
        (Y > X) ? "Делимое должно быть меньше делителя" : X % Y;
    resDivMode.innerHTML = result;
}

    
//     let result;
//     if (Y === 0) {
//         result = "Делить на 0 нельзя";
//     }
//     else if (Y > X) {
//         result = "Делимое должно быть меньше делителя";
//     }
//     else (result = X % Y)
//     resDivMode.innerHTML = result;
// }

/* Реализуйте функцию подсчета дней */
function computedDay(){
    let N = Number(n_level.value);
    let x = Number(x_for_day.value);
    let result;
    let i = 0;
    let workDay = 0;
    while (true) {
        workDay++;
        i += x;
        if (i >= N)
        break;
        i--;
    }
    /*
    ВАШ КОД ТУТ
    while .../ for ...
    выбирайте цикл
    как посчитаете нужным */

    result = workDay;
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
    let summ = Number(currCount.value)
    // из какой валюты
    let fir_curr = selectFirCurrency.value;
    // в какую валюту
    let sec_curr = selectSecCurrency.value;

    let result;

    let firPlusSec = (fir_curr + sec_curr);
    console.log(firPlusSec)
   
    switch (firPlusSec) {
        case '”euro””dollar”':
            result = summ / EUR_TO_DOL;
            break;
        case '”euro””ruble”':
            result = summ / EUR_TO_RUB;
            break;
        case '”dollar””euro”':
            result = summ / DOL_TO_EUR;
            break;
        case '”dollar””ruble”':
            result = summ / DOL_TO_RUB;
            break;
        case '”ruble””dollar”':
            result = summ / RUB_TO_DOL;
            break;
        case '”ruble””euro”':
            result = summ / RUB_TO_EUR;
            break;
        default:
            result = summ / 1;
    }

    resCurr.innerHTML = result;
}
// value=”euro”
// value=”dollar”
// value=”ruble”
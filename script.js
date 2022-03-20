/* ДОПИШИТЕ КОД ФУНКЦИЙ ЧТОБЫ ВСЕ РАБОТАЛО!*/

/* Реализуйте функцию подсчета факториала числа n */
function fact() {
    let n = Number(factor.value);
    let result = 1;
    for (let i = n; i>0; i--) {
        result = result * i;
    }
    resFact.innerHTML = result;
}
/* Реализуйте функцию деления по модулю X на Y */
function divByMod(){
    let X = Number(devisibleMod.value);
    let Y = Number(deviderMod.value);
    result = X % Y;
    resDivMode.innerHTML = result;
}

/* Реализуйте функцию подсчета дней */
function computedDay(){
    let N = Number(n_level.value);
    let x = Number(x_for_day.value);
    let y = 1;
    //let result = N / (x-1) +1 (^2);
    let result ;
    for (let i = 0; i<=N; i+=x) {
        i-=y
        result =i;
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

    let summ = Number(currCount.value)
    let fir_curr = String(selectFirCurrency.value);
    let sec_curr = selectSecCurrency.value;
    let result;
    let curs = fir_curr + sec_curr;
    switch (curs) {
        case 'eurdollar':
            result = (summ / EUR_TO_DOL);
            break;
        case 'eurrubl':
            result = (summ / EUR_TO_RUB);
            break;
        case 'dollareur':
            result = (summ / DOL_TO_EUR);
            break;
        case 'dollarrubl':
            result = (summ / DOL_TO_RUB);
            break;
        case 'rubleur':
            result = (summ / RUB_TO_EUR);
            break;
        case 'rubldollar':
            result = (summ / RUB_TO_DOL);
            break;
        default:
        result = 'Всё поломалось(';
    }
    resCurr.innerHTML = result;
}
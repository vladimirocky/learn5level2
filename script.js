/* ДОПИШИТЕ КОД ФУНКЦИЙ ЧТОБЫ ВСЕ РАБОТАЛО!*/

/* Реализуйте функцию подсчета факториала числа n */
function fact(){
    let n = Number(factor.value);
    let result;
    let summ = 1;
    
    for(let i = n;i>0;i--){
        summ = summ*i;
    }
    resFact.innerHTML = summ;
}

/* Реализуйте функцию деления по модулю X на Y */
function divByMod(){
    let X = Number(devisibleMod.value);
    let Y = Number(deviderMod.value);
    let result;
    result = X%Y;

    resDivMode.innerHTML = result;
}

/* Реализуйте функцию подсчета дней */
function computedDay(){
    let N = Number(n_level.value);
    let x = Number(x_for_day.value);
    let result = 0;
    
    for(i=0;i<N;i=i+(x-1)){
        console.log(i);
        result++;
    }

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
    let summ = Number(currCount.value);
    // из какой валюты
    let fir_curr = selectFirCurrency.value;
    // в какую валюту
    let sec_curr = selectSecCurrency.value;

    let result;


    //Почистим от мусора строки
    function clearStr(string){
        string = string.slice(1);
        string = string.slice(0,-1);
        return string;
    }

    let currency = clearStr(fir_curr)+'-'+clearStr(sec_curr);
    console.log(currency);

    switch(currency){
        case 'euro-euro': 
            result = summ;
            break;
        case 'dollar-dollar': 
            result = summ;
            break;
        case 'ruble-ruble': 
            result = summ;
            break;
        case 'euro-dollar': 
            result = summ/UER_TO_DOL;
            break;
        case 'euro-ruble': 
            result = summ*RUB_TO_EUR;
            break;
        case 'dollar-euro': 
            result = summ/DOL_TO_EUR;
            break;
        case 'dollar-ruble': 
            result = summ*RUB_TO_DOL;
            break;
        case 'ruble-dollar': 
            result = summ*DOL_TO_RUB;
            break;
        case 'ruble-euro': 
            result = summ*EUR_TO_RUB;
            break;
    }


    resCurr.innerHTML = result;
}
/* ДОПИШИТЕ КОД ФУНКЦИЙ ЧТОБЫ ВСЕ РАБОТАЛО!*/

/* Реализуйте функцию подсчета факториала числа n */
function fact(){
    let n = Number(factor.value);
    let result = 1;
    for(let i = n; i > 0; i--) {
        result = result * i
    }
    
    
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
    let k = 0;
    // for(i = 1; i < N; i++) {
    //     result += x - 1;
    //     console.log(result);
    // }
    while(x >1) {
        result ++;
        k +=x;
        if(k >= N) break;
        k --;
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
    let summ = Number(currCount.value)
    // из какой валюты
    let fir_curr = selectFirCurrency.value;
    // в какую валюту
    let sec_curr = selectSecCurrency.value;
        console.log(fir_curr,sec_curr);
    let result;
  
      let exchange = fir_curr + sec_curr;
      console.log(exchange);
      switch (exchange) {
          case"eurodollar" : 
          result = (summ / UER_TO_DOL);
          break;
          case"euroruble" : 
          result = (summ / EUR_TO_RUB);
          break;
          case"dollareuro" : 
          result = (summ / DOL_TO_EUR);
          break;
          case"dollarruble" : 
          result = (summ / DOL_TO_RUB);
          break;
          case"rubledollar" : 
          result = (summ / RUB_TO_DOL);
          break;
          case"rubleeuro" : 
          result = (summ / RUB_TO_EUR);
          break;
          default : 
          result = "Выберите валюту"
      }
    resCurr.innerHTML = result;
}
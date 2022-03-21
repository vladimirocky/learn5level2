/* ДОПИШИТЕ КОД ФУНКЦИЙ ЧТОБЫ ВСЕ РАБОТАЛО!*/

/* Реализуйте функцию подсчета факториала числа n */
function fact() {
  let n = Number(factor.value);
  let result;

  function factorial(x) {

    if (x <= 0) return 1;

    return x * factorial(x - 1);
  }

  result = factorial(n)

  resFact.innerHTML = result;
}

/* Реализуйте функцию деления по модулю X на Y */
function divByMod() {
  let X = Number(devisibleMod.value);
  let Y = Number(deviderMod.value);
  let result;

  result = X % Y;

  resDivMode.innerHTML = result;
}

/* Реализуйте функцию подсчета дней */
function computedDay() {
  let N = Number(n_level.value); 
  let x = Number(x_for_day.value); 
  let result; 
  let counter = 1 

  if (x < 2) {

    result = "ошибка";
  } else {
    while (counter * x - (counter - 1) < N) {
      counter++
    }
    result = counter
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
  let summ = Number(currCount.value)

  // из какой валюты
  let fir_curr = String(selectFirCurrency.value);

  // в какую валюту
  let sec_curr = selectSecCurrency.value;

  let result;

  const select = document.querySelector('#selectFirCurrency')

  const select2 = document.querySelector('#selectSecCurrency')


  let curs = fir_curr + sec_curr;


  switch (curs) {

    case select.options[0].value + select2.options[1].value:
      result = (summ / EUR_TO_DOL);
      break;

    case select.options[0].value + select2.options[2].value:
      result = (summ / EUR_TO_RUB);
      break;

    case select.options[1].value + select2.options[0].value:
      result = (summ / DOL_TO_EUR)
      break;

    case select.options[1].value + select2.options[2].value:
      result = (summ / DOL_TO_RUB)
      break;

    case select.options[2].value + select2.options[0].value:
      result = (summ / RUB_TO_EUR)
      break;

    case select.options[2].value + select2.options[1].value:
      result = (summ / RUB_TO_DOL)
      break;
  }

  resCurr.innerHTML = result;
}
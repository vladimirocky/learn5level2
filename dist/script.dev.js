"use strict";

/* ДОПИШИТЕ КОД ФУНКЦИЙ ЧТОБЫ ВСЕ РАБОТАЛО!*/

/* Реализуйте функцию подсчета факториала числа n */
function fact() {
  var n = Number(factor.value);
  var result = 1;

  for (var i = n; i > 0; i--) {
    result = result * i;
  }

  resFact.innerHTML = result;
}
/* Реализуйте функцию деления по модулю X на Y */


function divByMod() {
  var X = Number(devisibleMod.value);
  var Y = Number(deviderMod.value);
  var result;
  result = X % Y;
  resDivMode.innerHTML = result;
}
/* Реализуйте функцию подсчета дней */


function computedDay() {
  var N = Number(n_level.value); //Общая высота в метрах

  var x = Number(x_for_day.value); //Метров в день

  var y = 1; //-Метров в ночь(test)
  //let result = N / (x-1) +1 (^2);

  var result;

  for (var i = 0; i <= N; i += x) {
    //i--;
    i - y;
    result = i;
  }

  resDayCount.innerHTML = result;
}
/* Реализуйте функцию подсчета конвертированной суммы*/


function convertation() {
  // Используйте коэффициэнты
  var EUR_TO_DOL = 0.9;
  var EUR_TO_RUB = 0.007;
  var DOL_TO_EUR = 1.05;
  var DOL_TO_RUB = 0.008;
  var RUB_TO_DOL = 116;
  var RUB_TO_EUR = 126; // В следующих переменных записываем что выбрал/ввел пользователь
  // конвертируемая сумма

  var summ = Number(currCount.value); // из какой валюты

  var fir_curr = String(selectFirCurrency.value); // в какую валюту

  var sec_curr = selectSecCurrency.value;
  var result;
  var curs = fir_curr + sec_curr;
  console.log(curs);

  switch (curs) {
    case 'eurodollar':
      result = summ / EUR_TO_DOL;
      break;

    case 'euroruble':
      result = summ / EUR_TO_RUB;
      break;

    case 'dollareuro':
      result = summ / DOL_TO_EUR;
      break;

    case 'dollarruble':
      result = summ / DOL_TO_RUB;
      break;

    case 'rubleeuro':
      result = summ / RUB_TO_EUR;
      break;

    case 'rubledollar':
      result = summ / RUB_TO_DOL;
      break;

    default:
      result = 'Incorrect input';
  }

  resCurr.innerHTML = result;
}
//# sourceMappingURL=script.dev.js.map

/* ДОПИШИТЕ КОД ФУНКЦИЙ ЧТОБЫ ВСЕ РАБОТАЛО!*/

/* Реализуйте функцию подсчета факториала числа n */
function fact() {
  let n = Number(factor.value);
  let result = 1;

  // ВАШ КОД ТУТ
  if (n != 1) {
    for (let i = n; i >= 1; i--) {
      result *= i;
    }
  } else {
    result = n;
  }

  resFact.innerHTML = result;
}

/* Реализуйте функцию деления по модулю X на Y */
function divByMod() {
  let X = Number(devisibleMod.value);
  let Y = Number(deviderMod.value);
  let result;

  //ВАШ КОД ТУТ
  result = X % Y;

  resDivMode.innerHTML = result;
}

/* Реализуйте функцию подсчета дней */
function computedDay() {
  let N = Number(n_level.value);
  let x = Number(x_for_day.value);
  let result = 0;

  //ВАШ КОД ТУТ

  let i = 0;
  if (x < 2) {
    resDayCount.innerHTML =
      "Нужно ускориться. Такими темпами пирамиды нам не видать :(";
  } else {
    while (i < N) {
      i = i + x - 1;
      result++;
    }
    resDayCount.innerHTML = result;
  }
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

  //ВАШ КОД ТУТ
  const operation = `${fir_curr}${sec_curr}`;

  switch (operation) {
    case "”euro””dollar”":
      result = (summ / UER_TO_DOL).toFixed(2);
      break;
    case "”euro””ruble”":
      result = (summ / EUR_TO_RUB).toFixed(2);
      break;

    case "”dollar””euro”":
      result = (summ / DOL_TO_EUR).toFixed(2);
      break;
    case "”dollar””ruble”":
      result = (summ / DOL_TO_RUB).toFixed(2);
      break;
    case "”ruble””dollar”":
      result = (summ / RUB_TO_DOL).toFixed(2);
      break;
    case "”ruble””euro”":
      result = (summ / RUB_TO_EUR).toFixed(2);
      break;
  }

  resCurr.innerHTML = result;
}

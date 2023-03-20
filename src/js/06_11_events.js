/*
 * - Створення і видаленння слухачів
 */
const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

addListenerBtn.addEventListener('click', () => {
  console.log('Чіпляю слухача події на цільову кнопку');

  targetBtn.addEventListener('click', onTargetBtnClick);
});

//операція по видаленню слухача
//якщо ви знаете, що будете відписуватись потрібно передати і на
// додавання і виделення слухача одну і теж саму ф-цію.

removeListenerBtn.addEventListener('click', () => {
  console.log('Знімаю слухача події з цільової кнопки');

  targetBtn.removeEventListener('click', onTargetBtnClick);
});

function onTargetBtnClick() {
  console.log('клік по цільовий конопці');
}

function logMessage() {
  console.log('Клік по цільовий кнопці');
}
/*---------------------------------------------------------------*/
//Variant - 2

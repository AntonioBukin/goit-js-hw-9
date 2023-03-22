/*
 * - Створення і видаленння слухачів
 */
// const targetBtn = document.querySelector('.js-target-btn');
// const addListenerBtn = document.querySelector('.js-add-listener');
// const removeListenerBtn = document.querySelector('.js-remove-listener');

// addListenerBtn.addEventListener('click', () => {
//   console.log('Чіпляю слухача події на цільову кнопку');

//   targetBtn.addEventListener('click', onTargetBtnClick);
// });

//операція по видаленню слухача
//якщо ви знаете, що будете відписуватись потрібно передати і на
// додавання і виделення слухача одну і теж саму ф-цію.

// removeListenerBtn.addEventListener('click', () => {
//   console.log('Знімаю слухача події з цільової кнопки');

//   targetBtn.removeEventListener('click', onTargetBtnClick);
// });

// function onTargetBtnClick() {
//   console.log('клік по цільовий конопці');
// }

// function logMessage() {
//   console.log('Клік по цільовий кнопці');
// }
/*---------------------------------------------------------------*/
// Модальне вікно
// 1. Открити і закрити по кнопці: onModalOpen та onModalClose
// 2. Закрити по кліку в бекдроп on BackDropClick
// 3. Закрити по ESC: onEscapeKeypress
// 4. В СSS є клас show-modal, який необхідно додати на body при відкритті модалки.

// const refs = {
//   openModalBtn: document.querySelector('[data-action="open-modal"]'),
//   closeModalBtn: document.querySelector('[data-action="close-modal"]'),
//   backdrop: document.querySelector('.js-backdrop'),
// };

// // 1. Открити і закрити по кнопці: onModalOpen та onModalClose

// refs.openModalBtn.addEventListener('click', onOpenModal);
// refs.closeModalBtn.addEventListener('click', onCloseModal);
// refs.backdrop.addEventListener('click', onBackdropClick);

// function onOpenModal() {
//   window.addEventListener('keydown', onEscKeyPress);
//   document.body.classList.add('show-modal');
// }

// function onCloseModal() {
//   window.removeEventListener('keydown', onEscKeyPress);
//   document.body.classList.remove('show-modal');
// }

// // 2. Закрити по кліку в бекдроп on BackDropClick

// function onBackdropClick(event) {
//   if (event.currentTarget === event.target) {
//     console.log('клік в бекдроп!!!');
//     onCloseModal();
//   }
// }

// // 3. Закрити по ESC: onEscapeKeypress
// function onEscKeyPress(event) {
//   const ESC_KEY_CODE = 'Escape';

//   if (event.code === ESC_KEY_CODE) {
//     onCloseModal();
//   }
// }
/*---------------------------------------------------------------*/

// Що буде виведено у консоль при натисканні на елемент <button>?

const elem = document.querySelector('div');
elem.addEventListener('click', event => {
  console.log(event.currentTarget); //елемент div буде виведено у консоль
});
/*---------------------------------------------------------------*/

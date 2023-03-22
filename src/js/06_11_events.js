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

// const elem = document.querySelector('div');
// elem.addEventListener('click', event => {
//   console.log(event.currentTarget); //елемент *div* буде виведено у консоль
// });
/*---------------------------------------------------------------*/

// Що буде виведено у консоль при натисканні на елемент <button>?

// const elem = document.querySelector('div');
// elem.addEventListener('click', event => {
//   console.log(event.target); //елемент *span* буде виведено у консоль
// });
/*---------------------------------------------------------------*/

//event.target - цільовий елемент на якому відбулась подія (клікнув на div відобразився div, клікнув на span відобразився span)
//event.currentTarget - елемент на якому вісить обробник (куди би я не клікнув, все одно буде виводити сам елемент наприклад <div>)

/*---------------------------------------------------------------*/
//Example 1

// Створити калькулятор вартості продукту в залежності від ціни.
//При роботі з подіями використовувати делагування.

// При змінні данних в інпуті №1 чи №2 автоматично має перераховуватися загальна вартість

// Завжди має відображатися валюта - гривня

// Загальна сума відображається з копійками (2 знаки після коми)

// В підписі другого інпута має бути кольорова підказка скільки кілограм вибрав користувач на другому інпуті.

// Кольорова підказка має змінювати своє значення при перетягувані повзунка.

// В інпуті №2 мін і мах поріг встановлюєте самостійно.

// При завантаженні сторінки сприпт має автоматично розрахувати вартість на основі даних за замовчуванням які ви встановите в розмітці.

//об'єкт у якому будемо зберігати значення полів з форми
//та рахувати фінальну вартість
const data = {
  price: 0,
  quantity: 0,
  calcTotalPrice() {
    return (this.price * this.quantity).toFixed(2);
  },
};

//dom links
const form = document.getElementById('form');
//console.log(form);
const total = document.getElementById('total');
//console.log(total);
const amount = document.getElementById('amount');

//console.log(data);
dataFill();
update();

//events
form.addEventListener('input', handleFormChange);

//functions
function handleFormChange({ target }) {
  //*деструктурували event міг бути запис const target = event.target

  const { value } = target; //*деструктурували value

  //*console.log('Це event.target', event.target); // Target - це наша input
  //*console.log('event.currentTarget', event.currentTarget); // currentTarget - це наша уся форма
  //console.log(value); //отримали значення, що в середені input (завдяки value)
  // console.log(form.elements.price); //отримали доступ до ел. price
  // console.log(form.elements.quantity); //отримали доступ до ел. quantity

  if (target === form.elements.quantity) {
    //якщо target елемент дорівнює form.elements.quantity, виводемо value
    //console.log(value);
    amount.textContent = value; //тепер у нас бігунок взаємодіє з кількістю (кг)
  }

  target.setAttribute('value', value); //тепер у нас value в коді змінюється, водночас з калькулятором
  dataFill();
  update();
}

// наповнює об'єкт data значеннями з артибутів value e елементів форм
function dataFill() {
  //заповнили об'єкт базовими данними з html коду
  data.price = form.elements.price.getAttribute('value');
  data.quantity = form.elements.quantity.getAttribute('value');
}

// оновлює інтерфейс калькулятора(показує вартість та оновлює amount)
function update() {
  total.textContent = data.calcTotalPrice() + 'грн';
  amount.textContent = data.quantity;
}

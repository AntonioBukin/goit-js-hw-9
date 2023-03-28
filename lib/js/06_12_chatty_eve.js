//Mousemove та throttle - уповільнення

// const coordsOutputRef = document.querySelector('.js-coords');
// let mouseMoveCbInvocationCounter = 0;

// const throttledOnMouseMove = _.throttle(onMouseMove, 250);

// window.addEventListener('mousemove', throttledOnMouseMove);

// function onMouseMove(event) {
//   mouseMoveCbInvocationCounter += 1;

//   coordsOutputRef.textContent = `Кількість викликів onMouseMove: ${mouseMoveCbInvocationCounter},
//         X: ${event.clientX},
//         Y: ${event.clientY},
//     `;
// }
/*-------------------------------------------------------------*/

//Input та debounce - відкладений пошук

// const inputRef = document.querySelector('.js-input');
// const outputRef = document.querySelector('.js-output');
// let inputCbInvocationCounter = 0;

// inputRef.addEventListener('input', _.debounce(onInputChange, 2000));

// function onInputChange(event) {
//   inputCbInvocationCounter += 1;

//   outputRef.textContent = `Кількість викликів onInputChange : ${inputCbInvocationCounter},
//     Значення: ${event.target.value}`;
// }
/*-------------------------------------------------------------*/
//Example 1 (Фільтр з пошуком)
/* покрокові дії:
1) Зарендеріть розмітку елементів списку;
2) Слухаємо зміни фільтру;
3) Фільтруємо данні і рендерім нові елементи
*/

// const tech = [
//   { label: 'HTML' },
//   { label: 'CSS' },
//   { label: 'JS' },
//   { label: 'React' },
//   { label: 'Node.JS' },
//   { label: 'Vue' },
//   { label: 'Redux' },
// ];

// const refs = {
//   list: document.querySelector('.js-list'),
//   input: document.querySelector('#filter'),
// };

// refs.input.addEventListener('input', _.debounce(onFilterChange, 2000));

// const listItemsMarkup = createListItemsMarkup(tech);

// refs.list.innerHTML = listItemsMarkup;

// function createListItemsMarkup(items) {
//   return items.map(item => `<li>${item.label}</li>`).join('');
// }

// function onFilterChange(evt) {
//   //console.log(evt.target.value);
//   const filter = evt.target.value.toLowerCase();

//   const filteredItems = tech.filter(t =>
//     t.label.toLowerCase().includes(filter)
//   );

//   //console.log(filteredItems);

//   const listItemsMarkup = createListItemsMarkup(filteredItems);
//   //console.log(listItemsMarkup);

//   refs.list.innerHTML = listItemsMarkup;
// }
/*-------------------------------------------------------------*/
//Example 2 (леніве завантаження)

// if ('loading' in HTMLImageElement.prototype) {
//   console.log('браузер підтримує lazyLoad');

//   const lazyImages = document.querySelectorAll('img[loading="lazy"]');

//   lazyImages.forEach(img => {
//     img.src = img.dataset.src;
//   });
// } else {
//   console.log('браузер Не підтримує lazyLoad');

//   const script = document.createElement('script');
//   script.src =
//     'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
//   script.integrity =
//     'sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==';
//   script.crossOrigin = 'anonymous';
//   script.referrerPolicy = 'no-referrer';

//   document.body.appendChild(script);
// }

// const lazyImages = document.querySelectorAll('img[data-src]');
// //console.log(lazyImages);

// lazyImages.forEach(Image => {
//   Image.addEventListener('load', onImageLoaded, { once: true });
// });

// function onImageLoaded(evt) {
//   console.log('Зображення завантажилось');
//   evt.target.classList.add('appear');
// }
/*-------------------------------------------------------------*/

//Example 3
//1. Створити модальне вікно яке буде відкриватися при кліку на кнопку в середині тега body
// Модальне вікно має закриватися при кліку на напівпрозорий оверлей, та на іконку хрестика всередині модалки

//2. Додати в модалку логіку закриття при натисканні на кнопку Escape

refs = {
  overlay: document.getElementById('overlay'),
  modalWindow: document.getElementById('modalWindow'),
  closeBtn: document.getElementById('closeBtn'),
  openBtn: document.getElementById('openBtn')
};
const classes = {
  openModal: 'open-modal'
};

//1 Повісити обробник подій який буде відкривати вікно
refs.openBtn.addEventListener('click', handleModal);
refs.closeBtn.addEventListener('click', handleModal);
refs.overlay.addEventListener('click', handleModal);
document.addEventListener('keydown', handleModalClose);
function handleModal() {
  //console.log(event); //ф-ція спрацьовує, коли ми натискаємо на btn
  document.body.classList.toggle(classes.openModal); //при натисканні на btn, відкривається модалка, кнопка close закриває +
  //при натисканні на порожне поле, теж спрацьовує закривання модалки
}

function handleModalClose({
  code
}) {
  console.log(code); //витягнули назву клавіши на клавіатурі, на яку нажимають

  if (code === 'Escape') {
    //console.log('Yes'); //при натисканні на клавішу Escape, з'являється надпис Yes
    document.body.classList.remove(classes.openModal); //завдяки цієї опрації при натисканні на Escape модалка закривається.
  }
}
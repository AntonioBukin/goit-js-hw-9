import throttle from 'lodash.throttle';
//Метод JSON.stringify() - принимает значение и преобразовывает его в JSON

// const footballClub = {
//   name: 'Arsenal',
//   age: 136,
//   isHappy: true,
// };

// const fcJSON = JSON.stringify(footballClub);
// console.log(fcJSON); // "{"name":"Arsenal","age":136,"isHappy":true}"

//Метод JSON.parse() - Это операция обратная преобразованию в строку (stringify)

// const saveFcInfo = '{"name":"Shakhtar","age":98,"isHappy":true}';

// console.log(JSON.parse(saveFcInfo));
/*---------------------------------------------------------------*/

//localStorage - локальне сховище

//console.log(localStorage);

//setItem - можно добати новий запис у вигляді пари ключі:значення. Завдяки stringify приводимо до строки
//localStorage.setItem('my-data', JSON.stringify({ name: 'Anton', age: 36 })); // key: my-data, value { name: 'Anton', age: 36 }

//getItem - прочитати із localStorage
// const saveData = localStorage.getItem('my-data');
// console.log('saveData', saveData); //строка
// const parseData = JSON.parse(saveData);
// console.log('parseData', parseData); //повноцінний JS об'ект з яким можемо працювати
/*---------------------------------------------------------------*/

//Example 1(форма відгуків на сайті)
/*1) Ідея, людина хоче залишити відгук на сайті, заповнює форму фідгуку, пише коментар
     але не відправила свій коментар. Необхідно зберігати коментар, 
     поки людина не відправить його.
*/

// feedback-msg - такі назви краще виносити в константи
const STORAGE_KEY = 'feedback - msg';

const refs = {
  form: document.querySelector('.js-feedback-form'),
  textarea: document.querySelector('.js-feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 1000));

populateTextarea();

function onFormSubmit(evt) {
  evt.preventDefault(); //запрещаем перезагрузку страници

  console.log('Отправляем форму');

  evt.currentTarget.reset(); //currentTarget - це форма, після відправки ми чистимо форму

  localStorage.removeItem(STORAGE_KEY); //завдяки цьому, коли в наступний раз кліент зайде на сайт і захоче написати відгук
  //в формі у нього не буде відображатись попередній коментар
}

/*- Получаем значение поля
  - Сохраняем его в хранилище
  - Можно добавить trottle 
*/

function onTextareaInput(evt) {
  const message = evt.target.value; //отримаємо, те що кліент вводить в Textarea
  //console.log(message);
  localStorage.setItem(STORAGE_KEY, message); //Те що кліент вводить в Textarea, ми зберігаємо в localStorage
}

/*- Получаем значение из хранилища
  - Если что-то било обновляем DOM
*/

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY); //получаем значение из хранилища

  if (savedMessage) {
    console.log(savedMessage); //если savedMessage приводится к true c ним можно работать
    //null приводится к false, все інше к true
    refs.textarea.value = savedMessage; //оновлюємо DOM
  }
}

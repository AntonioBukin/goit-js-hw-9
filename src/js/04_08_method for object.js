// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);
// // Произошла мутация исходных данных - массива numbers
// console.log(numbers); // [2, 4, 6, 8, 10]

// const students = [
//   { name: 'Манго', courses: ['математика', 'физика'] },
//   { name: 'Поли', courses: ['информатика', 'математика'] },
//   { name: 'Киви', courses: ['физика', 'биология'] },
// ];

// const allCourses = students.flatMap(student => student.courses);
// console.log(allCourses);

// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );

// console.log(uniqueCourses);

/*-------------------------------------------------------------*/
//Метод map()

// Example 1

// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
//   { name: 'Хьюстон', score: 64 },
// ];

// console.table(students);

//1) Отримати масив усіх прізвищь з масива об'ектів

// const studentNames = students.map(student => {
//   return student.name;
// });

//більш короткий синтаксис const studentNames = students.map(student => student.name);

//console.log('studentNames', studentNames); //отримали масиі прізвищь

//2) Отримати масив усіх балів учнів з масива об'ектів

// const studentScore = students.map(student => student.score);

// console.log('studentScore', studentScore);

//3) Збільшити score кожного студента на 10%

// const updateStudents = students.map(student => {
//   console.log(student); //перебрали

//   return {
//     ...student,
//     score: student.score * 1.1,
//   };
// });

// console.log(updateStudents);

//4) Збільшуємо кількість годин по name

// const studentNamesToUpdate = 'Поли';

// const updateStudents = students.map(student => {
//   //console.log(student.name); //перебрали всіх студентів

//   if (studentNamesToUpdate === student.name) {
//     //console.log('Ура, ми знайшли потрібного студента');

//     return { ...student, score: student.score + 350 };
//   }

//     return student;
// });

//Більш короткий синтаксис, через тренарник

// const studentNamesToUpdate = 'Поли';

// const updateStudents = students.map(student => {
//   return studentNamesToUpdate === student.name
//     ? {
//         ...student,
//         score: student.score + 120,
//       }
//     : student;
// });

// console.table(updateStudents);

/*-------------------------------------------------------------*/

//Метод filter()/ array.prototype.filter()
//Повертає новий масив.
//Якщо колбек повернув true, елемент додається у масив
//Якщо колбек повернув false, елемент не додається у масив

// Example 2
// const numbers = [5, 10, 18, 21, 24, 27, 30];

// const searchNumbers = numbers.filter(number => {
//   //console.log(number); //перебрали і отримали всі числа з масива

//   return number > 15; //числа які більше 15
// });

// console.log(searchNumbers); //отримали всі числа більше 15

// Example 3

// const students = [
//   { name: 'Манго', score: 83, online: false },
//   { name: 'Полі', score: 59, online: true },
//   { name: 'Аякс', score: 37, online: false },
//   { name: 'Ківі', score: 94, online: true },
// ];

// 1) Отрумаємо масив всіх онлайн студентів

// const whoAreOnlineStudents = students.filter(student => student.online);
// console.log(whoAreOnlineStudents); //отримали об'ект масиву, хто з студентів on-line

// 2) Отрумаємо масив всіх не онлайн студентів

// const whoAreNotOnline = students.filter(student => !student.online);
// console.log(whoAreNotOnline);

// 3) Отрумаємо масив студентів у яких score більше 80

// const hiScoreStudents = students.filter(student => student.score > 80);
// console.log(hiScoreStudents);

// 4) Отрумаємо масив студентів у яких score більше 95

// const hiOverStudents = students.filter(student => student.score > 95);
// console.log(hiOverStudents); //!Важливо, якщо жоден з крітеріїв не відповідає умовам, повертається пустий масив

/*-------------------------------------------------------------*/

//Метод find() / array.prototype.find()
// - повертає перший елемент, який відповідає умовам

// Example 4
// 1) Знайти в масиві елементи більше 18

//const numbers = [5, 10, 18, 21, 24, 27, 30];

// const hiNumbers = numbers.find(number => number > 18);
// console.log(hiNumbers); //21 - це перший елемент який відповідає умові

// const hiNewNumbers = numbers.find(number => number === 50); //альтернативний запис умови
// console.log(hiNewNumbers); //undefined - якщо не відповідає жодній умові

// 2) Знайти співробітника по імені

// const employees = [
//   { name: 'Манго', score: 83, online: false, id: 'employee-121' },
//   { name: 'Полі', score: 59, online: true, id: 'employee-122' },
//   { name: 'Аякс', score: 37, online: false, id: 'employee-123' },
//   { name: 'Ківі', score: 94, online: true, id: 'employee-124' },
// ];

// const employeesToFind = 'Ківі';

// const employeesWithName = employees.find(
//   employee => employee.name === employeesToFind
// );

// console.log(employeesWithName); //знайшли співробітника Ківі

// 3) Знайти співробітника по id (зробити функцію)

// const findemployeeById = (allEmployee, employeeId) => {
//   //console.log(allEmployee); //отримали всі 4 об'екта
//   //console.log(employeeId); //отримали id який шукаємо employee-123
//   return allEmployee.find(employee => employee.id === employeeId);
// };

// console.log(findemployeeById(employees, 'employee-123'));

/*-------------------------------------------------------------*/

//Методи every() /array.prototype.every()
// Повертає true, якщо всі елементи масиву задовольняють умову та false
//якщо хоч один не задовільняє.

// const employees = [
//   { name: 'Манго', score: 83, online: false, id: 'employee-121' },
//   { name: 'Полі', score: 59, online: true, id: 'employee-122' },
//   { name: 'Аякс', score: 37, online: false, id: 'employee-123' },
//   { name: 'Ківі', score: 94, online: true, id: 'employee-124' },
// ];

// Example 5

// 1) Перевірити хто всі чи не всі в об'єкті масиву онлайн?

// const isAllOnline = employees.every(employee => employee.online);
// console.log('isAllOnline на цей час:', isAllOnline); //У мене два онлайн і два неонлайн, тому повертає false

// 2) Перевірити у всіх результат score більше 30 в об'єкті масиву онлайн?

// const isScoreMore = employees.every(employee => employee.score > 30);
// console.log('isScoreMore:', isScoreMore); //так у тебе всі більше 30

/*-------------------------------------------------------------*/

//Метод some() /array.prototype.some()
// Повертає true, якщо хоча б один елемент масиву задовольняє умову та false
//якщо хоч один не задовільняє.

// 1) Перевірити є хтось в об'єкті масиву онлайн?

// const isAnyOnline = employees.some(employee => employee.online);
// console.log('isAnyOnline:', isAnyOnline); //true - хоч один у нас online

// 2) Перевірити є хтось в об'єкті масиву у кого score більше 50?

// const overFiftyScore = employees.some(employee => employee.score > 50);
// console.log(overFiftyScore); //true

/*-------------------------------------------------------------*/

//Метод reduce() /array.prototype.reduce()
// Повертає все, що завгодно.
// Робить все, що завгодно.

// Example 6

// 1) Порахувати total

// const numbers = [5, 10, 15, 21, 24, 26];

// const total = numbers.reduce((acc, number) => {
//   console.log('acc', acc);
//   console.log('number', number);

//   return acc + number;
// });

//Більш короткий синтаксис
//const total = numbers.reduce((acc, number) => acc + number, 0);
//console.log(total); //101

// 2) Порахувати загальну зп співробітників

// const students = { Манго: 100, Полі: 110, Аякс: 120, Манчестер: 80 };

// const totalSalary = Object.values(students).reduce((acc, total) => {
//   return acc + total;
// });
// console.log(totalSalary); //410

// 2) Порахувати загальну кількість часів, скільки грали гравці

// const students = [
//   { name: 'Манго', timePlayed: 83 },
//   { name: 'Полі', timePlayed: 159 },
//   { name: 'Аякс', timePlayed: 137 },
//   { name: 'Ківі', timePlayed: 194 },
//   { name: "Х'юстон", timePlayed: 174 },
// ];

// const totalTimePlayed = students.reduce((acc, player) => {
//   return acc + player.timePlayed;
// }, 0);

//більш короткий синтаксис
// const totalTimePlayed = students.reduce(
//   (acc, player) => acc + player.timePlayed,
//   0
// );

// console.log(totalTimePlayed);

// 3) Порахувати загальну суму товарів у кошику

// const cart = [
//   { name: 'Apples', price: 83, quantity: 2 },
//   { name: 'Plum', price: 59, quantity: 1 },
//   { name: 'Oranges', price: 37, quantity: 2 },
//   { name: 'Kiwis', price: 94, quantity: 1 },
//   { name: 'Bananas', price: 64, quantity: 3 },
// ];

// const totalSum = cart.reduce((acc, sum) => acc + sum.price * sum.quantity, 0);

// console.log(totalSum);

// 4) Зібрати всі теги з твітов

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

//const allTags = tweets.reduce((acc, tweet) => {
//acc.push(...tweet.tags); краще рішення на 316 стр
//tags.push('js', 'nodejs');
//tags.push('html', 'css');

//   return [...acc, ...tweet.tags]; //спочатку розпиляємо старий acc, а потім tweet.tags
// }, []); //[] додаємо в пустий масив

//Більш короткий синтаксис
// const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);

// console.log(allTags); //отримали масив всіх тегов

// 5) Порахувати і вивести стату тегів
// Якщо св-во з ключом tag є, збільшуємо його значання на 1
// Якщо св-са немає з таким ключом в tag, зробити і записати 1

// const tagsStat = allTags.reduce((acc, tag) => {
//   //console.log('acc', acc);

//   if (acc[tag]) {
//     acc[tag] += 1;

//     return acc;
//   }

//   acc[tag] = 1;

//   return acc;
// }, {}); //додати нашу стату в пустий об'ект {}

//Більш короткий синтаксис (тренарник)

// const tagsStat = allTags.reduce((acc, tag) => {
//   return {
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   };
// }, {});

// console.log(tagsStat);

/*-------------------------------------------------------------*/

//Метод sort()/array.prototype.sort()
//змінює орігінальний масив, сортує в бік збільшення,
//приведення значень до рядка а далі сортує по Unicode

// 1) Сотрування
// const scores = [61, 19, 74, 35, 92, 56];
// scores.sort();
// console.log('scores', scores); //[19, 35, 56, 61, 74, 92];

// const letters = ['b', 'B', 'a', 'A', 'c', 'C'];
// letters.sort();
// console.log(letters); // ['A', 'B', 'C', 'a', 'b', 'c']

// 2) compareFunction - ф-ція порівняння (callback);

// const scores = [61, 19, 74, 35, 92, 56];

// scores.sort((curEl, nexEl) => {
//   return curEl - nexEl; //сотрує від меньшого к більшому
//   //return nexEl - curEl; //сотрує від більшого к меньшому
// }); // curEl - поточний елемент, nexEl - сусідний з права ел

// console.log(scores);

// 3) Зробити копію масива, щоб не сортувати оригінальний
// Завдяки операції ...spread + sort

// const scores = [61, 19, 74, 35, 92, 56];

// const copyOfScore = [...scores]; //розпилили в новий масив
// copyOfScore.sort(); //відсортували

//console.log('copyOfScore', copyOfScore); //[19, 35, 56, 61, 74, 92]

//Більш короткий синтаксис

// const newSortedNumbers = [...scores].sort();
// console.log('newSortedNumbers', newSortedNumbers);

//Якщо ми хочемо відсортувати наш масив масив від меньшого до більшого і навпаки
// const scores = [61, 19, 74, 35, 92, 56, 62, 4];
// const moreLessSortedNumbers = [...scores].sort((a, b) => b - a);

// const lessMoreSortedNumbers = [...scores].sort((a, b) => a - b);

// console.log('moreLessSortedNumbers', moreLessSortedNumbers); //від більшого до меньшого
// console.log('lessMoreSortedNumbers', lessMoreSortedNumbers); //від меньшого до більшого
// console.log('scores', scores); //незмінний

// 4) Зробити копію масива, щоб не сортувати оригінальний

// const players = [
//   { name: 'Манго', timePlayed: 83, id: '016' },
//   { name: 'Полі', timePlayed: 159, id: '021' },
//   { name: 'Аякс', timePlayed: 137, id: '036' },
//   { name: 'Ківі', timePlayed: 194, id: '004' },
//   { name: "Х'юстон", timePlayed: 174, id: '005' },
// ];

// 4.1 відсортувати по ігровому часу (від меньшого до більшого)

// const sortedByMorePlayers = [...players].sort((prevPlayers, nextPlayers) => {
//   return prevPlayers.timePlayed - nextPlayers.timePlayed;
// });

// console.table(sortedByMorePlayers);

// 4.2 відсортувати по ігровому часу (від більшого до меньшого)

// const sortedByLessPlayers = [...players].sort((prevPlayers, nextPlayers) => {
//   return nextPlayers.timePlayed - prevPlayers.timePlayed;
// });

// console.table(sortedByLessPlayers);

// 4.3 відсортувати по іd (від більшого до меньшого)

// const sotredByBigId = [...players].sort((prevId, nextId) => {
//   return nextId.id - prevId.id;
// });

// console.table(sotredByBigId);

/*-------------------------------------------------------------*/

//Метод flat()/array.prototype.flat()
//«розглажує масив до вказанної глибини»
//за замовчування глибина 1

// const scores = [61, 19, [74, [35]], [92, [55, 18]], 56];

// console.log(scores.flat(3)); //можна розгладити многомірний масив

/*-------------------------------------------------------------*/

//Метод flatMap()/array.prototype.flatMap()

// 1) Зібрати всі теги з твітов в один масив за допомогою flatMap()

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const allTags = tweets.flatMap(tweet => tweet.tags);
// console.log(allTags); //отримали один масив з тегами

/*-------------------------------------------------------------*/

//Ланцюжки викликів - chaining

// const scores = [61, 19, 56, 14, 15, 89];

// 1) Отримати числа більше 35

//const moreThenTwo = scores.filter(score => score > 35);
// console.log(moreThenTwo);

// 2) Помножити на 3 числа в масиві, які більше 35

// const muitByThree = moreThenTwo.map(score => score * 3);
// console.log(muitByThree);

// 3) Відсортувати від меньшого до більшого значення з 2-го завдання

// const sorted = muitByThree.sort((a, b) => a - b);
// console.log(sorted);

//Ланцюжок 3 дій в одну (чейнинг)

// const sorted = scores
//   .filter(score => score > 35)
//   .map(score => score * 3)
//   .sort((a, b) => a - b);

// console.log(sorted);
/*---------------------------------------------------------------*/

// Example 7
// Відстортувати студентів хто он-лайн по рангу
// спочатку фільтруємо потім сортуємо

// const students = [
//   { name: 'Манго', rank: 183, id: '016', online: false },
//   { name: 'Полі', rank: 159, id: '021', online: true },
//   { name: 'Аякс', rank: 137, id: '036', online: false },
//   { name: 'Ківі', rank: 194, id: '004', online: true },
//   { name: "Х'юстон", rank: 174, id: '005', online: true },
// ];

// const onLineStudentsAndSorted = students
//   .filter(student => student.online)
//   .sort((studentA, studentB) => studentA.rank - studentB.rank);

// console.table(onLineStudentsAndSorted);
/*---------------------------------------------------------------*/

//Example 8
//Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент,
//значение которого это чётное число, добавляя к нему значение параметра value.
//Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers,
//а создавала, наполняла и возвращала новый массив с обновлёнными значениями.

// function changeEven(numbers, value) {
//   // Change code below this line
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
//   // Change code above this line
// }

// const changeEven = (numbers, value) => альтернативний запис умови (581 строці)
// function changeEven(numbers, value) {
//   const NumbersArray = [];

//   numbers.forEach(element => {
//     //console.log(element);
//     //console.log(value);

//     if (element % 2 === 0) {
//       //console.log(element);
//       NumbersArray.push(element + value);
//     } else {
//       !element % 2 === 0;
//       NumbersArray.push(element);
//     }
//   });

//   return NumbersArray;
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10)); //[1, 12, 3, 14, 5]
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); //[12, 18, 3, 7, 14, 16]
// console.log(changeEven([17, 24, 68, 31, 42], 100)); //[17, 124, 168, 31, 142]
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); //[1, 12, 3, 14, 5]
// console.log(changeEven([1, 2, 3, 4, 5], 10)); //[144, 13, 81, 192, 136, 154]
/*---------------------------------------------------------------*/

//Example 9
// Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет.
// Обязательно используй метод map().
// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];

// const planetsLengths = planets.map(planet => planet.length);

// console.log(planets);
// console.log(planetsLengths);
/*---------------------------------------------------------------*/

//Example 10
//Используя метод map() сделай так, чтобы в переменной titles
//получился массив названий книг(свойство title) из всех объектов массива books.

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const titles = books.map(book => book.title);

// console.log(titles); //["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man", "Redder Than Blood", "Enemy of God"]
/*---------------------------------------------------------------*/

//Example 11
//Используя метод flatMap() сделай так, чтобы в переменной genres
//получился массив всех жанров книг(свойство genres)
//из массива книг books.

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism'],
//   },
// ];

// const genres = books.flatMap(book => book.genres);

// console.log(genres);
/*---------------------------------------------------------------*/

//Example 12
//Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей (свойство name)
//из массива объектов в параметре users.

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];

// const getUserNames = users.map(user => user.name);
// console.log(getUserNames);

// const getUserNames = users => {
//   const NewUserName = users.map(user => user.name);

//   return NewUserName;
// };
/*---------------------------------------------------------------*/

//Example 13
//Дополни функцию getUserEmails(users) так, чтобы она возвращала массив почтовых адресов пользователей (свойство email)
//из массива объектов в параметре users.

// const getUserEmails = users => {
//   const NewUserEmail = users.map(user => user.email);

//   return NewUserEmail;
// };
/*---------------------------------------------------------------*/

//Example 14
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 != 0);

// console.log(evenNumbers);
// console.log(oddNumbers);
/*---------------------------------------------------------------*/

//Example 15
//Дополни код так, чтобы в переменной allGenres был массив всех жанров книг (свойство genres) из массива books,
//а в переменной uniqueGenres массив уникальных жанров - без повторений.

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction', 'mysticism'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism', 'adventure'],
//   },
// ];

// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter(
//   (genres, index, array) => array.indexOf(genres) === index
// );

// console.log(allGenres);
// console.log(uniqueGenres);
/*---------------------------------------------------------------*/

//Example 16
//Используя метод filter() дополни код так, чтобы:
//В переменной topRatedBooks получился массив книг рейтинг которых (свойство rating)
//больше либо равно значению переменной MIN_RATING.
//В переменной booksByAuthor получился массив книг написанных автором с именем (свойство author)
//которое совпадает со значением в переменной AUTHOR.

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Bernard Cornwell';
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// console.log(topRatedBooks);
// console.log(booksByAuthor);
/*---------------------------------------------------------------*/

//Example 17
//Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала массив пользователей
//у которых цвет глаз(свойство eyeColor) совпадает со значением параметра color.

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];

// const getUsersWithEyeColor = (users, color) =>
//   users.filter(user => user.eyeColor === color);

// console.table(getUsersWithEyeColor(users, 'blue'));
/*---------------------------------------------------------------*/

//Example 18
//Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей,
//возраст которых(свойство age) попадает в промежуток от minAge до maxAge.

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ];

// const getUsersWithAge = (users, minAge, maxAge) =>
//   users.filter(user => user.age >= minAge && user.age < maxAge);

//console.log(getUsersWithAge(users, 20, 30));
//console.log(getUsersWithAge(users, 30, 40));
/*---------------------------------------------------------------*/

//Example 19
//Дополни функцию getUsersWithFriend(users, friendName) так,
//чтобы она возвращала массив пользователей у которых есть друг с именем в параметре friendName.
//Массив друзей пользователя хранится в свойстве friends.

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ];

// const getUsersWithFriend = (users, friendName) =>
//   users.filter(user => user.friends.includes(friendName));

// console.log(getUsersWithFriend(users, 'Briana Decker')); //[ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); //[ 'Elma Head', 'Sheree Anthony' ]
/*---------------------------------------------------------------*/

//Example 20
//Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей (свойство friends).
//У нескольких пользователей могут быть одинаковые друзья,
//сделай так чтобы возвращаемый массив не содержал повторений.

// const getFriends = users => {
//   const allFriends = users.flatMap(user => user.friends);

//   const uniqueFriends = allFriends.filter(
//     (friend, index, array) => array.indexOf(friend) === index
//   );

//   return uniqueFriends;
// };

// console.log(getFriends(users));

//Example 21
//Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей,
//значение свойства isActive которых true.

//const getActiveUsers = users => users.filter(user => user.isActive);

// console.log(getActiveUsers(users));
/*---------------------------------------------------------------*/

//Example 22
//Дополни функцию getInactiveUsers(users) так, чтобы она возвращала массив неактивных пользователей,
//значение свойства isActive которых false.

// const getInactiveUsers = users => users.filter(user => !user.isActive);

// console.log(getInactiveUsers(users));
/*---------------------------------------------------------------*/

//Example 23
//Используя метод find() дополни код так, чтобы:
//В переменной bookWithTitle получился объект книги название которой (свойство title) совпадает со значением переменной BOOK_TITLE.
//В переменной bookByAuthor получился объект книги автор который (свойство author) совпадает со значением переменной AUTHOR.

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);

//console.log(bookWithTitle);
//console.log(bookByAuthor);
/*---------------------------------------------------------------*/

//Example 24
//Дополни функцию getUserWithEmail(users, email) так, чтобы она возвращала объект пользователя,
//почта которого(свойство email) совпадает со значением параметра email.

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];

// const getUserWithEmail = (users, email) =>
//   users.find(user => user.email === email);

//console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
//console.log(getUserWithEmail(users, 'elmahead@omatom.com'));

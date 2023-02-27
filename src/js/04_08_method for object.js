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

//03-05 Object
// const playlist = {} - літерал об'єкта.
//Справа від равно {} - це літерал об'єкта

// const playlist = {
//   name: 'мій плейліст',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
// };

// console.log(playlist);

//Додавання нового ключа, або перезапис
//playlist.qwe = 5;

//Перезапис старого ключа
// playlist.rating = 22;
// console.log(playlist);

//Доступ до свойства {}
//1 варінт через крапку ім'я об'єкта + ім'я ключа 'playlist.rating'
// console.log(playlist.rating); //5
// console.log(playlist.name); //мій плейліст

//Якщо ім'я ключа(строка) зберігається в змінній, достукатись до данного ключа потрібно через
//через назва об'єкта + квадратні дужки і назва змінної playlist['tracks']
// const propertyName = 'tracks';
// console.log(playlist.propertyName); //undefined
// console.log(playlist[propertyName]); //['трек-1', 'трек-2', 'трек-3']

//Коротший запис властивостей
// const username = 'Mango';
// const email = 'mango@gmail.com';

// const signUpDate = {
//   username,
//   email,
// };

// console.log(signUpDate);

//Вираховні властивості
//<input name='color' value='tomato'>
// const inputName = 'team';
// const inputValue = 'psg';

// const teamFootbalName = {
//   [inputName]: inputValue,
// };

// console.log(teamFootbalName); // team: psg

//Методи об'єкта та this при звретранні до св-ва у методах
//Методи об'єктів використовуються для того, щоб працювати зі свойствами
//Метод для зміни ім'я, рейтінгу ті інше. Методи працюють тільки зі св-вами об'єктів

// const playlist = {
//   name: 'мій плейліст',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,

//   //сінтаксіс об'яви метода
//   //   getName(a) {
//   //     console.log('Ага це getName', a);
//   //   },
// };

// // playlist.getName(15);

// console.log(playlist);

// Потренуємось додавати нові методи
// const playlist = {
//   name: 'мій плейліст',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
//   changeName(newName) {
//     this.name = newName;
//   },
//   changeRating(newRating) {
//     this.rating = newRating;
//   },
//   addTrack(track) {
//     this.tracks.push(track);
//   },
//   getTrackCount() {
//     return this.tracks.length;
//   }, //метод який рахує довжину нашого значення 'tracks' автоматично
// };

// playlist.changeName('Нове ім`я');

// playlist.changeRating(15);

// playlist.addTrack('Новий трек-4');

// playlist.addTrack('Новий трек-5');

// console.log(playlist.getTrackCount());

// console.log(playlist);

//Перебор об'єкта через Object.keys|value|entries

//Object.keys - повертає масив ключей;
// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let totalFeedback = 0;

// const keys = Object.keys(feedback); // отримуємо доступ до всіх ключей
// console.log(keys);

// for (const key of keys) {
//   console.log(key); // перебравши ключі, тепер ми можемо працювати з ними
//   console.log(feedback[key]); //отримуємо доступ до значень ключей

//   totalFeedback += feedback[key]; //склали всі значення наших ключів
// }

// console.log('totalFeedback:', totalFeedback);

//Object.values - повертає масив значень
// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let totalFeedback = 0;

// const values = Object.values(feedback);
// console.log(values); //отримали масив значень в ключах

// for (const value of values) {
//   console.log(value); //перебрали в масиві наші значення

//   totalFeedback += value; //склали всі значення наших ключей
// }

// console.log('totalFeedback:', totalFeedback);

//Робота з колекціями(масив обїектів)
// Example 1
//Знайти друга по імені

// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kivi', online: true },
//   { name: 'Poly', online: true },
//   { name: 'Fill', online: false },
// ];

// console.table(friends);

// const findFriendByName = function (allfriends, friendName) {
//   for (const friend of allfriends) {
//     console.log(friend); //перебрали поєлементно
//     console.log(friend.name); //поєлементно перебираємо і отримуємо доступ до сво-ва

//     if (friend.name === friendName) {
//       return 'Знайшли!!!';
//     }
//   }

//   return 'Незнайшли';
// };

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

// Example 2
//Отримати імена всіх друзів

// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kivi', online: true },
//   { name: 'Poly', online: true },
//   { name: 'Fill', online: false },
// ];

// console.table(friends);

// const getAllNames = function (allfriends) {
//   const names = []; // зробимо пустий масив в який будемо додавати імена

//   for (const friend of allfriends) {
//     console.log(friend.name); //Отримали доступ до кожного друга

//     names.push(friend.name);
//   }

//   return names;
// };

// console.log(getAllNames(friends));

// Example 3
//Отримати імена друзів, які тільки on-line

// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kivi', online: true },
//   { name: 'Poly', online: true },
//   { name: 'Fill', online: false },
// ];

// console.table(friends);

// const getOnlineFriends = function (allfriends) {
//   const onLineFriends = [];

//   for (const friend of allfriends) {
//     console.log(friend); //перебрали масив
//     console.log(friend.online); //перебрали, хто online

//     if (friend.online) {
//       onLineFriends.push(friend);
//     }
//   }

//   return onLineFriends;
// };

// console.log(getOnlineFriends(friends));

// Example 4
//Отримати імена друзів, які тільки offine

// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kivi', online: false },
//   { name: 'Poly', online: true },
//   { name: 'Fill', online: false },
// ];

// console.table(friends);

// const getOfflineFriends = function (allfriends) {
//   const offLineFriends = [];

//   for (const friend of allfriends) {
//     console.log(friend); //перебрали масив
//     console.log(friend.online); //дізнались, хто online

//     if (!friend.online) {
//       offLineFriends.push(friend); //якщо друг не online додати в масив
//     }
//   }

//   return offLineFriends;
// };

// console.log(getOfflineFriends(friends));

// Example 5
//Зробити функцію яка отримує функцію і online та offline

const friends = [
  { name: 'Mango', online: false },
  { name: 'Kivi', online: false },
  { name: 'Poly', online: true },
  { name: 'Fill', online: false },
];

console.table(friends);

const getFriendsByOnlineStatus = function (allfriends) {
  const friendsByStatus = {
    online: [],
    offline: [],
  };

  for (const friend of allfriends) {
    if (friend.online) {
      friendsByStatus.online.push(friend);
      continue;
    }

    friendsByStatus.offline.push(friend);
  }

  return friendsByStatus;
};

console.log(getFriendsByOnlineStatus(friends));

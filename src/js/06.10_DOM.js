//document.querySelector - для пошука єлементів

// const navOneEl = document.querySelector('.menu');
// console.log(navOneEl); //знайти один єлементи
//Якщо нічого незнайдено, поверне null

// const navEl = document.querySelectorAll('.menu-item');
// console.log(navEl); //знайти всі єлементи
//Якщо нічого незнайдено, поверне порожній массив
/*---------------------------------------------------------------*/
//Practice

//Example 1
//Створити картку продукта
//В класі продукта може бути product--on-sale i product--not-available

// const product = {
//   name: 'oranges',
//   description: 'Suppose I tell you I like apples better than oranges.',
//   price: 2000,
//   available: true,
//   onSale: true,
// };

// const productRef = document.createElement('article'); //зробили createElement через 'article'
// productRef.classList.add('product');

// const titleRef = document.createElement('h2');
// titleRef.textContent = product.name;
// titleRef.classList.add('product__name');

// const descryRef = document.createElement('p');
// descryRef.textContent = product.description;
// descryRef.classList.add('product__descry');

// const priceRef = document.createElement('p');
// priceRef.textContent = `Ціна: ${product.price} грн`;
// priceRef.classList.add('product__price');

// console.log(productRef);
// console.log(titleRef);
// console.log(descryRef);
// console.log(priceRef);

// productRef.append(titleRef, descryRef, priceRef); // все зібрали в одне ціле
// console.log(productRef);

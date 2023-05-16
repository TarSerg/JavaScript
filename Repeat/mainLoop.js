// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// let filterStatus = [];
// let filterStatus1 = [];
// let filterStatus2 = [];
// for (const user of users) {
//     if (user.status) {
//         filterStatus[filterStatus.length] = user;
//     } else if (user.status === false) {
//         filterStatus1[filterStatus1.length] = user;
//     } else if (user.age > 30) {
//         filterStatus2[filterStatus2.length] = user;
//     }
// }
// console.log(filterStatus);
// console.log(filterStatus1);
// console.log(filterStatus2);


// filterStatus2=[];
// for (const user of users) {
//     if(user.age>30){
//         filterStatus2[filterStatus2.length]=user;
//     }
// }
// console.log(filterStatus2);

// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
// for (let i = 0; i < products.length; i++) {
//     const product = products[i];
//     document.write(`<div className="product-card">
//          <h3 className="product-title">${product.title}.  ${product.price}- USD</h3>
//          <img src=${product.image} alt="" className="product-image" width="150px">
//         </div>`);
// }
//  с помощью For of
// for (const product of products) {
//     document.write(`<div className="product-card">
//         <h3 className="product-title">${product.title}. price-${product.price} - USD</h3>
//         <img src="${product.image}" alt="" className="product-image" width="150px">
//         </div>`);
//
// }

// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// document.write(`<ul>`)
// for (let i = 0; i < listOfItems.length; i++) {
//     const listOfItem = listOfItems[i];
//        document.write(`<li>${listOfItem}</li>`);
// }
// document.write(`</ul>`);
//   с помощью for of
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// document.write(`<ul>`)
// for (const listOfItem of listOfItems) {
//     document.write(`<li>${listOfItem}</li>`);
// }
// document.write(`</ul>`);


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++){
//     document.write([i]);
//     console.log();
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i < 100; i=i+2){
//     document.write([i]);
//     console.log([i]);
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 1; i < 100; i++){
// if(i% 2===0){
//     document.write(i);
//     console.log(i);
// }
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 1; i < 100; i++) {
//     const arrayElement = [i];
//     if(arrayElement%3===0){
//     document.write(arrayElement);
//     console.log(arrayElement);
// }
// }

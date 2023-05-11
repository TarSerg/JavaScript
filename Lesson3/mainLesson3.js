//  є масив  за допомоги циклу вивести:
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

// for (const userq of users) {
//     if(userq.status )
//     console.log(userq);
//     }
// console.log('--------------');

// for (const userw of users) {
//     if(!userw.status )
//         console.log(userw)
// }
// console.log('--------------');
// for (const usere of users) {
//     if(usere.age > 30 )
//         console.log(usere)
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// let numbers = [
//     {number:1}, {number:2}, {number:3}, {number:4}, {number:5}, {number:6}, {number:7}, {number:8}, {number:9}, {number:10}];

// for ( let i = 0; i < 10; i++){
//     document.write(`<div> number house </div>`)
//    }
// document.write('--------------')
// for ( let i = 0; i < 10; i++){
//     document.write(`<div> number house ${i+1} </div>`);}
//
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
// let q = 0;
// while ( q<20){
//     document.write(`<div> <h1>number house </h1></div>`);
//     console.log(`<div> <h1>number house </h1></div>` );
//     q++;
// }
// console.log('--------------');
// let i = 0;
// while ( i<20){
//     document.write(`<div> <h1>number house-${i+1} </h1></div>`);
//     console.log(`<div> <h1>number house - ${i+1}</h1></div>` );
//     i++;
// }
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//

// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];


// document.write(`<ul>`)
// for (const listOfItem of listOfItems) {
//     console.log(listOfItem);
//     document.write(`<li>${listOfItem}</li>`)
// }
// document.write(`</ul>`)


// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
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
// for ( let i = 0; i <products.length ; i++) {
//     const product = products[i];
//     document.write(`<div class ="product-card">
//         <h3> ${product.title} - ${product.price} EUR</h3>
//         <img src="${product.image}" alt="" className="product-image">
//     </div>`)
// }
// for (const product of products) {
//     document.write(`
//        <div class="product-card">
//           <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
//           <img src=${product.image} alt="" class="product-image" width="150px">
//        </div>
//     `)
// }
// --------------------------------доп. ДЗ----------------------------------------------
// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

//  let arr= ['one','two',1,2,true,false]
// console.log(arr);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
//     2. перебрати його циклом for
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;
// while (i < numbers.length) {
//     const number = numbers[i];
// console.log(number);
//     i++;
// }
// for ( let i = 0; i <numbers.length ; i++) {
//  const number = numbers[i];
//  console.log(number)
// }
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let i = 0;
// while (i < numbers.length) {
//     const number = numbers[i];
//     if (number % 3 === 0)  {
//     console.log(number);
//        }
//     i++;
// }
// for ( let i = 0; i <numbers.length ; i++) {
//  const number = numbers[i];
//  if (number % 3 === 0) {
//   console.log(number)
//  }
// }
// / перебрати циклом while та вивести  числа тільки парні  значення
//  перебрати циклом for та вивести  числа тільки парні  значення
// let i = 0;
// while (i < numbers.length) {
//     const number = numbers[i];
//     if (number % 2 === 0)
//     {
//         console.log(number);
//     }
//     i++
// }
// for ( let i = 0; i <numbers.length ; i++) {
//  const number = numbers[i];
//  if (number % 2 === 0) {
//   console.log(number)
//  }
// }
//   7. замінити кожне число кратне 3 на слово "okten"
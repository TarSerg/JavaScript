// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function words(word){
//     document.write(`<ul>`);
//     document.write(`<li>${word}</li>`);
//     document.write(`<li>${word}</li>`);
//     document.write(`<li>${word}</li>`);
//       document.write(`</ul>`);
// }
// words(`hello word`);
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function words(word) {
//     document.write(`<ul>`);
//     for (let i = 0; i <3; i++) {
//
//        document.write(`<li>${word}</li>`);
//     }
//     document.write(`</ul>`);
// }
// words(`hello my friend`);

// створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function text(words,tag) {
//     document.write(`<${tag}> ${words}</${tag}>`);
// }
// text('hello words','p');

// - створити функцію яка приймає масив та виводить кожен його елемент

// let massive = [1, 2, 'fsdfsf', 'hfghfgh', 8];
//
// function arr(arguments) {
//     for (const argument of arguments) {
//         console.log(argument);
//     }
//   }
//   arr(massive);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// function sum(arr) {
//     let result=0;
//     for (const arrElement of arr) {
//         result += arrElement;
//             }
//     return result;
// }
// console.log(sum([1,2,10]));
// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// let thins=[]
// thins=['книга','карандаш','стол','стул','тв','дверь','окно','кровать','нож','вилка'];
// console.log(thins[0]);
// console.log(thins[1]);
// console.log(thins[2]);
// console.log(thins[3]);
// console.log(thins[4]);
// console.log(thins[5]);
// console.log(thins[6]);
// console.log(thins[7]);
// console.log(thins[8]);
// console.log(thins[9]);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// let book1={};
// book1={title:'oleg',pageCount:20,genre:'qqq'}
// console.log(book1);
//
// let book2={};
// book2={title:'sergey',pageCount:13,genre:'iii'}
// console.log(book2);
// let book3={};
// book3={title:'igor',pageCount:27,genre:'uuu'}
// console.log(book3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// let book1={};
// book1={title:'oleg',pageCount:20,genre:'qqq',authors:[{name:'ttt',age:50}]};
// console.log(book1);
//
// let book2={};
// book2={title:'sergey',pageCount:13,genre:'iii',authors:[{name:'bbb', age:60}]}
// console.log(book2);
//
// let book3={};
// book3={title:'igor',pageCount:27,genre:'uuu',authors:[{name:'jjj',age:20}]}
// console.log(book3);
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
// let users=[];
// users=[{name:'qqq',username:'www',password:111},{name:'eee',username:'rrr',password:222},{name:'ttt',username:'yyy',password:333},{name:'uuu',username:'iii',password:444},{name:'ooo',username:'ppp',password:555},{name:'aaa',username:'sss',password:666},{name:'ddd',username:'fff',password:777},{name:'ggg',username:'hhh',password:999}];
//
// console.log(users[0]['password']);
// console.log(users[1]['password']);
// console.log(users[2]['password']);
// console.log(users[3]['password']);
// console.log(users[4]['password']);
// console.log(users[5]['password']);
// console.log(users[6]['password']);
// console.log(users[7]['password']);


//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let x= 9;
// if( x !== 0) {
//      console.log('good');
// }  else {
//           console.log('no good');
//     }

// let a=5;
// if(a === 1){
//     console.log('good');
// } else if(a === 0){
//     console.log('goods');
// }else if(a === -3){
//     console.log('super good');
// }else {
//     console.log('no good');
// }
// -------второе решение задачи------
// let a= 1;
// if(a===1 || a===0 || a===-3 ){
//     console.log('good');
// } else {
//     console.log('no good');
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time= 45;
// if (time >0 && time <= 15 ){
//     console.log('one');
// }else if(time>15 && time<=30){
//     console.log('two');
// }else if(time>30 && time<=45){
//     console.log('three');
// } else if (time>45 && time<=60 ){
//     console.log('four')
// } else {
//     console.log('error');
// }


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = 60;
// if (day>=1 && day<10){
//     console.log('1dec');
// }else if(day>=11 && day<20){
//     console.log('2dec');
// }else if (day>=21 && day<=31){
//     console.log('3dec');
//     } else {
//     console.log('error');
// }


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let day=2;
// switch (day) {
//     case 1:
//         console.log('pn');
//         break;
//     case 2:
//         console.log('vt');
//         break;
//     case 3:
//         console.log('sr');
//         break;
//     case 4:
//         console.log('cht');
//         break;
//     case 5:
//         console.log('pt');
//     case 6:
//         console.log('sub');
//     case 7:
//         console.log('vs');
//         break;
//     default:
//         console.log('qqqq');
// }

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
// let a=6;
// let b=6;
// if( a>b ){
//     console.log('one');
// }else if (b>a){
//     console.log('two');
// }else if(a===b){
//     console.log('three');
// }

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
// let x = null;
// if( x===0 || x === '' || x===null || x===undefined ){
//     x="default";
// }
// console.log(x);

// За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// if(coursesAndDurationArray [0]['monthDuration'] >5){
//     console.log(coursesAndDurationArray[0].title,'super')}
//
//  if (coursesAndDurationArray [1]['monthDuration'] >5){
//     console.log(coursesAndDurationArray[1].title,'super')}
//
//  if (coursesAndDurationArray [2]['monthDuration'] >5){
//     console.log(coursesAndDurationArray[2].title,'super')}
//
//  if (coursesAndDurationArray [3]['monthDuration'] >5){
//     console.log(coursesAndDurationArray[3].title,'super')}
//
//  if (coursesAndDurationArray [4]['monthDuration'] >5){
//     console.log(coursesAndDurationArray[4].title,'super')}
//
//   if (coursesAndDurationArray [5]['monthDuration'] >5){
//     console.log(coursesAndDurationArray[5].title,'super')}


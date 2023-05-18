// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let string="hello world, lorem ipsum, javascript is cool";
let up=string.toUpperCase();
console.log(up);
// / ----------------- вначале сделал таким образом, затем переделал---------------------
// console.log('hello world'.toUpperCase());
// console.log('lorem ipsum'.toUpperCase());
// console.log('javascript is cool'.toUpperCase());
//

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let string4="HELLO WORLD, LOREM IPSUM, JAVASCRIPT IS COOL";
let bottom = string4.toLowerCase()
console.log(bottom);
// / ----------------- вначале сделал таким образом, затем переделал---------------------
// console.log('HELLO WORLD'.toLowerCase());
// console.log('LOREM IPSUM'.toLowerCase());
// console.log('JAVASCRIPT IS COOL'.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str .replaceAll(' dirty string   ','"dirty string"'));

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

// ----------------------------посмотрите правильность написания,может нужно исправить--------------
let str1 = 'Ревуть воли як ясла повні';
let arr=[];
let stringToarray = str1.split(' ');
arr.push(stringToarray);
console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
//  -------долго думал но придумал------
let numbers=[10,8,-7,55,987,-1011,0,1050,0];
let string1 = numbers.map (value=> `${value}`);
console.log(string1);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3];
//
let sortNums=nums.sort((a,b)=>{
    return a-b;
});
console.log(sortNums);

let sortNums1=nums.sort((a,b)=>{
    return b-a;
});
console.log(sortNums1);

// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration
let sort = coursesAndDurationArray.sort((a,b)=>{
    return b.monthDuration - a.monthDuration;});
console.log(sort);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filter = coursesAndDurationArray.filter(value =>value.monthDuration>5 );
console.log(filter);
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let newCoursesAndDurationArray = coursesAndDurationArray.map(function (value, index) {
   return{
        id:index + 1,
        title:value.title,
        monthDuration:value.monthDuration
    };
  });
console.log( newCoursesAndDurationArray);

//=========== компактное решение задания===========
let newCoursesAndDurationArray1 = coursesAndDurationArray.map(function (value, index) {
    return{...value,id:index +1 };
});
console.log( newCoursesAndDurationArray1);


// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// let cards = [
//     { cardSuit: 'spade', value: '6', color: 'black' },
//     { cardSuit: 'diamond', value: '6', color: 'red' },
//     { cardSuit: 'heart', value: '6', color: 'red' },
//     { cardSuit: 'clubs', value: '6', color: 'black' },
//     { cardSuit: 'spade', value: '7', color: 'black' },
//     { cardSuit: 'diamond', value: '7', color: 'red' },
//     { cardSuit: 'heart', value: '7', color: 'red' },
//     { cardSuit: 'clubs', value: '7', color: 'black' },
//     { cardSuit: 'spade', value: '8', color: 'black' },
//     { cardSuit: 'diamond', value: '8', color: 'red' },
//     { cardSuit: 'heart', value: '8', color: 'red' },
//     { cardSuit: 'clubs', value: '8', color: 'black' },
//     { cardSuit: 'spade', value: '9', color: 'black' },
//     { cardSuit: 'diamond', value: '9', color: 'red' },
//     { cardSuit: 'heart', value: '9', color: 'red' },
//     { cardSuit: 'clubs', value: '9', color: 'black' },
//     { cardSuit: 'spade', value: '10', color: 'black' },
//     { cardSuit: 'diamond', value: '10', color: 'red' },
//     { cardSuit: 'heart', value: '10', color: 'red' },
//     { cardSuit: 'clubs', value: '10', color: 'black' },
//     { cardSuit: 'spade', value: 'jack', color: 'black' },
//     { cardSuit: 'diamond', value: 'jack', color: 'red' },
//     { cardSuit: 'heart', value: 'jack', color: 'red' },
//     { cardSuit: 'clubs', value: 'jack', color: 'black' },
//     { cardSuit: 'spade', value: 'queen', color: 'black' },
//     { cardSuit: 'diamond', value: 'queen', color: 'red' },
//     { cardSuit: 'heart', value: 'queen', color: 'red' },
//     { cardSuit: 'clubs', value: 'queen', color: 'black' },
//     { cardSuit: 'spade', value: 'king', color: 'black' },
//     { cardSuit: 'diamond', value: 'king', color: 'red' },
//     { cardSuit: 'heart', value: 'king', color: 'red' },
//     { cardSuit: 'clubs', value: 'king', color: 'black' },
//     { cardSuit: 'spade', value: 'ace', color: 'black' },
//     { cardSuit: 'diamond', value: 'ace', color: 'red' },
//     { cardSuit: 'heart', value: 'ace', color: 'red' },
//     { cardSuit: 'clubs', value: 'ace', color: 'black' },
// ];
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];


// --написати пошук всіх об'єктів, в який в modules є docker
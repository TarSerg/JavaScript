// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let person = ['name', 'surname', 'lastname', 'age', 'status', 'country', 'city', 'street', 'number house', 'name dog'];
console.log(person);
console.log(person[0]);
console.log(person[1]);
console.log(person[2]);
console.log(person[3]);
console.log(person[4]);
console.log(person[5]);
console.log(person[6]);
console.log(person[7]);
console.log(person[8]);
console.log(person[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'qqq',
    pageCount: 100,
    genre: 'Crime',

}
let book2 = {
    title: 'www',
    pageCount: 150,
    genre: 'Detective fiction',
}

let book3 = {
    title: 'eee',
    pageCount: 200,
    genre: 'Science fiction',
}
// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let bookOne = {
    title: 'rrr',
    pageCount: 100,
    genre: 'Post-apocalyptic',
    authors: [{name: 'Igor', age: 30}]
}
let bookTwo = {
    title: 'ttt',
    pageCount: 150,
    genre: 'Distopia',
    authors: [{name: 'Sergey', age: 40}]
}
let bookThree = {
    title: 'yyy',
    pageCount: 200,
    genre: 'Cyberpunk',
    authors: [{name: 'Vasya', age: 50}]
}
// Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name: 'Noah', username: 'qqq', password: 111},
    {name: 'Liam', username: 'www', password: 222},
    {name: 'William', username: 'eee', password: 333},
    {name: 'James', username: 'rrr', password: 444},
    {name: 'Benjamin', username: 'ttt', password: 555},
    {name: 'Jacob', username: 'yyy', password: 666},
    {name: 'Michael', username: 'uuu', password: 777},
    {name: 'Elijah', username: 'iii', password: 888},
    {name: 'Ethan', username: 'ooo', password: 999},
    {name: 'Igor', username: 'ppp', password: 899},
];

console.log(users)
console.log(users[0]['password']);
console.log(users[1]['password']);
console.log(users[2]['password']);
console.log(users[3]['password']);
console.log(users[4]['password']);
console.log(users[5]['password']);
console.log(users[6]['password']);
console.log(users[7]['password']);
console.log(users[8]['password']);
console.log(users[9]['password']);

// - Є змінна х, якій ви надаєте довільне числове значення.

let x = +prompt('Логічні розгалуження')
 if (x !== 0){
     document.write('<div>Вірно</div>');
 } else {
     document.write('<div>Невірно</div>');
 }
console.log(x);

let a1 = +prompt('Логічні розгалуження1')
if (a1 === 1){
    document.write('<div>Вірно</div>');
} else {
    document.write('<div>Невірно</div>');
}
console.log(a1);

let a2 = +prompt('Логічні розгалуження1')
if (a2 === 0){
    document.write('<div>Вірно</div>');
} else {
    document.write('<div>Невірно</div>');
}
console.log(a2);

let a3 = +prompt('Логічні розгалуження1')
if (a3 === -3){
    document.write('<div>Вірно</div>');
} else {
    document.write('<div>Невірно</div>');
}
console.log(a3);

// Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt('Enter the number');
 if (time <= 15) {
     document.write('<div>one</div>')
     console.log('one');
} else if (time <= 30) {
     document.write('<div>two</div>')
    console.log('two')
 } else if (time <= 45) {
     document.write('<div>three</div>')
     console.log('three')
 } else if (time <= 59) {
     document.write('<div>four</div>')
     console.log('four')
 }

// У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = +prompt('Enter the number');
if (day <= 10) {
    document.write('<div>one</div>')
    console.log('one');
} else if (day <= 20) {
    document.write('<div>two</div>')
    console.log('two')
} else if (day <= 31) {
    document.write('<div>three</div>')
    console.log('three')
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let number =  +prompt('Plan for the day');
switch ( number) {
    case 1 :{
        document.write('<div>Monday</div>')
    }
        console.log('Monday');
        break;
    case 2 :{
        document.write('<div>Tuesday</div>')
    }
        console.log('Tuesday');
        break;
    case 3 :{
        document.write('<div>Wednesday</div>')
    }
        console.log('Wednesday');
        break;
    case 4 : {
        document.write('<div>Thursday</div>')
    }
        console.log('Thursday');
        break;
    case 5 :{
        document.write('<div>Friday</div>')
    }
        console.log('Friday');
        break;
    case 6 :{
        document.write('<div>Saturday</div>')
    }
        console.log('Saturday');
        break;
    case 7 :{
        document.write('<div>Sunday</div>')
    }
        console.log('Sunday');
    break;
    default:
        console.log('day');
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let x1 = 'w';
if (x1 === NaN || x1 === undefined || x1=== false || x1 === null || x1===0);{

    x1 = 'default'
    console.log(x1)
}
// з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер"

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray);
if (coursesAndDurationArray [0] ['monthDuration'] > 5) {
    console.log('super');}

if (coursesAndDurationArray[1] ['monthDuration'] > 5) {
    console.log('super');}

if (coursesAndDurationArray[2] ['monthDuration'] > 5) {
    console.log('super');}

if (coursesAndDurationArray[3] ['monthDuration']> 5) {
    console.log('super');}

if (coursesAndDurationArray[4] ['monthDuration']> 5) {
    console.log('super');}

if (coursesAndDurationArray[5] ['monthDuration']> 5) {
    console.log('super');}



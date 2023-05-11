// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function calc(a, b) {
    let result = a * b;
    return result;
}

console.log(calc(5, 8));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function radius(r) {
    let result1 = Math.PI * Math.pow(r, 2);
    return result1;
}

console.log(radius(3))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder(R, h) {
    let result2 = 2 * Math.PI * R * (h + R);
    return result2;
}

console.log(cylinder(1, 5));

// - створити функцію яка приймає масив та виводить кожен його елемент
function follIter(arr) {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
follIter(users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function text() {
    console.log(arguments);
}
text(`<p>Hello world</p> `);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function elements(...el) {
    console.log(el);
}
elements(1, 'rererer', false);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// - створити функцію яка повертає найменьше число з масиву


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    let s = 0;
    for (let i = 0; i < arr.length; i++) {
        const arrElement = arr[i];
       if( s += arr[i]);
    }
    return (s);
}
let mass = sum([1, 2, 10]);
console.log(mass);

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// function swap(arr,...elements){
//
//
// swap([11,22,33,44],0,1)
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let calc = (a,b)=> a * b;
console.log(calc(4,8));

// // - створити функцію яка обчислює та повертає площу кола з радіусом r
 let radius = (r)=>Math.PI*Math.pow(r, 2);
 console.log(radius(3))

// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinder = (R,h)=> 2 * Math.PI * R * (h + R);
 console.log(cylinder(5,10));

// // - створити функцію яка приймає масив та виводить кожен його елемент
let rt=[1,2,3,'dfgdfsgdsf',false];
let arr=(mas)=>{
 for (const rtElement of mas) {
  console.log(`вывод элемента:${rtElement}`);
 }
};
arr(rt);

// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let text=(words,tag)=>{ document.write(`<${tag}> ${words}</${tag}>`);
 };
text('hello','h1');

// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let text1=(argument)=>{document.write(`<ul>`)
 for (let i = 0; i < 3; i++) {
  const argumentElement = argument[i];
  document.write(`<li>${argument}</li>`);
 }document.write(`</ul>`) ;
 };
text1('Hard to learn');

// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// // Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let text2 = (words, arg) =>{document.write(`<ul>`) ;
for (let i = 0; i < arg; i++){
 document.write(`<li>${i + 1} - ${words}</li>`);
}document.write(`</ul>`) ;
}
text2('Hello world', 3);

// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let elements =[343,67,1,2,'fff',false,'dfg',true];
let list=(arguments)=>{document.write(`<ul>`);
    for (const argument of arguments) {
        document.write(`<li>${argument}</li>`);
    }
}
list(elements);

// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// // та виводить їх в документ. Для кожного об'єкту окремий блок.
const users = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28},
    {id: 5, name: 'max', age: 30},
    {id: 6, name: 'anya', age: 31},
    {id: 7, name: 'oleg', age: 28},
    {id: 8, name: 'andrey', age: 29},
    {id: 9, name: 'masha', age: 30},
    {id: 10, name: 'olya', age: 31},
    {id: 11, name: 'max', age: 31}
];
let block = (arguments) =>{
    for (const argument of arguments) {
        document.write(`<div>id:${argument.id}  name-${argument.name} age-${argument.age},</div>`);
    }
}
block(users);
// // // - створити функцію яка повертає найменьше число з масиву
let numbers=[23,87,11,1,-8,100];
let Return=(number)=>{let result=number[0];
 for (let i = 1; i < number.length; i++) {
 if(result>number[i]){
  result=number[i];
 }
 }
    return result;
}
console.log(Return(numbers));

// // - створити функцію sum(arr)яка приймає масив чисел,
// // сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sum=(arr)=>{let result=0;
for (const arrElement of arr) {
 result += arrElement;
}
return result;}

console.log(sum([1,2,10]));

// // - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// // Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap=(mus,ind1,ind2)=>{
    let num1 = mus[ind1];
    let num2 = mus[ind2];
     mus[ind1] = num2;
     mus[ind2] = num1;
return mus;
}
    console.log(swap([11,22,33,44],0,1)) ;

// // - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// // Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchange = (sumUAH,currencyValues,exchangeCurrency)=>{
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            return sumUAH / item.value;
        }
    }
}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'));



// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
if (friends.length  >= 3 ) {
    console.log('big massive')
}else if (friends.length < 3 ) {
    console.log('little massive')
}
////// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//  Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
//


// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }
let a = 1;
let b = 1;
if( a+b < 4 ){
    console.log('Few')
} else {
    console.log('Many')
}

//
// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором



//
// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
//


// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
let question = '5' ;
if ( question === 'ECMAScript') {
       console.log('Правильно!')
} else  {
    console.log('Не знаєте? ECMAScript!')
    }

//     - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
// let entrance =+ prompt( 'number apartment')
// if (entrance >=1 && entrance <=20){
//     document.write('<div>First</div>')
//     console.log('First')
// } else if(entrance >=21 && entrance <=48){
//     document.write('<div>Second</div>')
//     console.log('Second')
// } else if (entrance >=49 && entrance <=90){
//     document.write('<div>Third</div>')
//     console.log('Third')
// } else {
//     console.log('default')
// }

// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
let number=27;
if(number ===10 ){
    console.log('true')
} if (number !== 10 ) {
    console.log('false')
}

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
let temp = 15;
if (temp >= 10 && temp <= 22) {
    console.log('Go study')
} else {
    console.log( 'sitting home')
}
// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

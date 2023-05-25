 // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// function User(id,name,surname,email,phone){
//     this.id=id;
//     this.name=name;
//     this.surname=surname;
//     this.email=email;
//     this.phone=phone;
// }

// створити пустий масив, наповнити його 10 об'єктами new User(....)
// let newArr=[
//     new User(1,'vas','qqq','111@ukr.net',111),
//     new User(2,'ivn','www','112@ukr.net',112),
//     new User(3,'gal','eee','113@ukr.net',113),
//     new User(4,'zin','rrr','114@ukr.net',114),
//     new User(5,'ser','ttt','115@ukr.net',115),
//     new User(6,'sas','yyy','116@ukr.net',116),
//     new User(7,'oks','yyy','117@ukr.net',117),
//     new User(8,'and','uuu','118@ukr.net',118),
//     new User(9,'dim','iii','119@ukr.net',119),
//     new User(10,'gal','ooo','120@ukr.net',120)
//     ];
// console.log(newArr);
//------ другой метод выполнения задания-----
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
// let user=users.map(value=> new User
// (value.id,value.name,value.surname,value.email,value.phone));
// console.log(user);
//

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filter = newArr.filter((value)=>
// value.id%2===0);
// console.log(filter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// =======предыдущий массив итак идет по возростанию ID, я сделал по убыванию======
// let sort = newArr.sort((a,b)=>
// b.id-a.id);
// console.log(sort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client{
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
//    }
   // створити пустий масив, наповнити його 10 об'єктами Client
// let client= [
//    new Client(1,'qqq','xxx','11@ukr.net',11,['scarf','cap','hat ']),
//    new Client(2,'www','ggg','12@ukr.net',12,['handkerchief ','bow tie ']),
//    new Client(3,'eee','rrr','13@ukr.net',13,['tie ','tiepin','glove ',]),
//    new Client(4,'rrr','jjj','14@ukr.net',14,['umbrella']),
//    new Client(5,'ttt','ddd','15@ukr.net',15,['pendant ','brooch ']),
//    new Client(6,'yyy','hhh','16@ukr.net',16,['cufflink','clasp','earring ']),
//    new Client(7,'uuu','aaa','17@ukr.net',17,['ring ']),
//    new Client(8,'iii','ppp','18@ukr.net',18,['stone ','topaz ']),
//    new Client(9,'ooo','qqq','19@ukr.net',19,['diamond ','ruby ','emerald ']),
//    new Client(10,'ppp','bbb','20@ukr.net',20,['necklace ']),
// ]
// -----------------------тут что то не так -----наверно поздно решил учиться
// console.log(client);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sort = client.sort(function(a,b){
//     if(a.order<b.order){
//         return 1;}
//     if(a.order>b.order){
//         return -1;}
//     return 0;
//     });
//
// console.log(sort);

 // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// function Car(model,brand,year,speed,volume) {
//     this.model = model;
//     this.brand = brand;
//     this.year = year;
//     this.speed = speed;
//     this.volume = volume;
    // this.drive = function (msg) {
    //     console.log(`їдемо зі швидкістю ${msg} на годину`)

    // this.info= function(msg1,msg2,msg3,msg4,msg5){
    //     console.log(`${msg1}-${this.model}; ${msg2}-${this.brand}; ${msg3}-${this.year}; ${msg4}-${this.speed}; ${msg5}-${this.volume}` )----info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

    // this.changeYear = function (newValue) {
    // console.log(`${this.model}; ${this.brand}; ${newValue}; ${this.speed}; ${this.volume}`)   - змінює рік випуску на значення newValue

    //  }
    // }

// car.increaseMaxSpeed(1.2);

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//   let car = new Car('x-trail','Nissan',2016, 200,2.5 );
// car.info('model','brand','year','speed','volue');

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину

// car.drive('300km')

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

// змінює рік випуску на значення newValue
// car.changeYear(1990);

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// Car.prototype.addDriver =function (driver){
//     console.log(`${driver}`);
// }
// let car1=new  Car('x-trail','Nissan',2016, 200,2.5 )
// console.log(car1);
// car1.addDriver(`name:igor, age:30`);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
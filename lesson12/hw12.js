// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)

 let users= fetch ('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
     .then (value => {
         console.log(value)
         for (const element of value) {
             console.log(element.id);
             console.log(element.name);
         }
     });




// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

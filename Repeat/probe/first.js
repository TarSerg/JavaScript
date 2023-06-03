let vodka = [
    {
        title: 'Vodka',
        persentageOfAlcohol: 37,
        price: 15,
    },
    {
        title: 'Pan Tadeusz',
        persentageOfAlcohol: 40,
        price: 13,
    },
    {
        title: 'Sobieski',
        persentageOfAlcohol: 38,
        price: 22,
    },
    {
        title: 'Belvedere',
        persentageOfAlcohol: 39,
        price: 28,
    },
    {
        title: 'Żołądkowa Gorzka',
        persentageOfAlcohol: 40,
        price: 35,
    },
    {
        title: 'Dębowa',
        persentageOfAlcohol: 30,
        price: 9,
    },
    {
        title: 'Chopin',
        persentageOfAlcohol: 37,
        price: 20,
    },
    {
        title: 'Żubrówka',
        persentageOfAlcohol: 45,
        price: 45,
    },
    {
        title: 'Krupnik',
        persentageOfAlcohol: 40,
        price: 30,
    },
    {
        title: 'Luksusowa',
        persentageOfAlcohol: 45,
        price: 50,
    },
    {
        title: 'Wyborowa',
        persentageOfAlcohol: 35,
        price: 10,
    },

];

localStorage.setItem('vodka',JSON.stringify([]));
console.log(localStorage.getItem('vodka'));

let product = JSON.parse(localStorage.getItem('vodka'));
vodka.forEach(element=>{
    let div = document.createElement('div')
    if(element.price >=15 && element.price <=35){
        console.log(element);
        div.innerText = `title: ${element.title} ; persentageOfAlcohol: ${element.persentageOfAlcohol} ; price - ${element.price}`
        // div.push(element) ;  не хочет срабатывать такой вариант !!!!!! пришлось сделать через дивиннертекст
        product.push(element);
        document.body.appendChild(div);
    }});
console.log(product);
localStorage.setItem('vodka',JSON.stringify(product));

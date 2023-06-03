let buy = JSON.parse(localStorage.getItem('vodka'));
console.log(buy);
buy.forEach(element =>{
    let div = document.createElement('div');
    if(element.persentageOfAlcohol >38){
        div.innerText = `title: ${element.title} ; persentageOfAlcohol: ${element.persentageOfAlcohol} ; price - ${element.price} `
        // div.push(element) ;  не хочет срабатывать такой вариант !!!!!! пришлось сделать через дивиннертекст
        document.body.appendChild(div);

    } });
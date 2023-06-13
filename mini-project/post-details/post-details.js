
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
let id = new URL(location.href).searchParams.get('id');
// let userId = new URL(location.href).searchParams.get('userId');
// let userTitle = new URL(location.href).searchParams.get('userTitle');

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => response.json())
    .then((post) => {

        // console.log(post)
        let block = document.getElementsByClassName('wrap')[0];
        let div = document.createElement('div');
        div.innerHTML = `<b>userId:</b> ${post.userId};<br>
            <b>id:</b> ${post.id};<br> 
            <b>title:</b> ${post.title}; <br>
            <b>body:</b> ${post.body}`;
        block.appendChild(div);
    })

// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста
// (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then((response) => response.json())
    .then((comment) => {
        let ul = document.createElement('ul');
            for (const element of comment) {
                    // console.log(element)

            let block = document.getElementsByClassName('wrap2')[0];
            let li = document.createElement('li');
            li.innerHTML = `<b>postId:</b>${element.postId};
           <b> id:</b> ${element.id};
            <b>name:</b> ${element.name};
           <b> email:</b> ${element.email}`;
             
            ul.appendChild(li);
                block.appendChild(ul);
            }
            // console.log(comment);
    });
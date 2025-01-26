function data4(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data4 => showUser(data4))
}

function showUser(data4) {
    const ul = document.getElementById('user_list')
    for(const user of data4){
        const li = document.createElement('li');
        li.innerText= user.username;
        ul.appendChild(li)
    }
}
document.getElementById('data5').addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => data2(data))

    function data2(data) {
        const ul =document.getElementById('user_list');
        for(const user of data){
            const li = document.createElement('li');
            li.innerText = user.username;
            ul.appendChild(li);
        }
    }
})
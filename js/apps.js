document.getElementById('btn2').addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => console.log(data))
});

function data() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data1 => data3(data1))
}

function data3(data1) {
    console.log(data1);
}
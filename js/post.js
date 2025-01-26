function post() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => post1(data))
}
function post1(data) {
    const creatDive = document.getElementById('post_continer');
    for(const user of data){
        const postDiv = document.createElement('div');
        postDiv.classList.add('post')
        postDiv.innerHTML = `
        <h1>userId:${user.userId}</h1>
        <h2>id:${user.id}</h2>
        <h3>title:${user.title}</h3>
        <h4>body:${user.body}</h4>
        `
        creatDive.appendChild(postDiv)
    }
}

post();
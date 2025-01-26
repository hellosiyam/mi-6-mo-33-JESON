const lodeComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error('This is not found', error)
    )
} 

const lodeComments1 = async () =>{
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/comments')
        const data = await res.json();
        console.log(data);
    }
    catch(error){
        console.log('Data is Error');
        
    }
    
}


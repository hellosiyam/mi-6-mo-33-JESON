const person = {name: 'Amir', profation: 'Actor'};

const stringfy = JSON.stringify(person);

const personObj = JSON.parse(stringfy);

console.log(person);
console.log(stringfy);
console.log(personObj);


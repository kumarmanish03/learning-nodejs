// const person = {
//     name: "Manish Kumar",
//     age: 21
// }

class Person {

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greetings(){
        console.log('My Name is ' + this.name + ' and age is ' + this.age);
    }
}

module.exports = Person;
// methods

//___________________________________________________________

// const person = {
//     firstName : "Abdullah",
//     age : 20,
//     about: function(){
//         console.log(`The name is ${this.firstName} and age is ${this.age}`)
//     },
// };

// console.log(person);
// person.about();


// this keyword is basically denoting to "person" in this case as we have called about using person... so "this" is denoting "person" in this case.
//___________________________________________________________



const personInfo = function(){
    console.log(`The name is ${this.firstName} and the age is ${this.age}`);
}


const person1 = {
    firstName : "abdullah",
    age: 20,
    about: personInfo,
};

const person2 = {
    firstName : "Shazy",
    age: 19,
    about: personInfo,
};

const person3 = {
    firstName : "Ahmed",
    age: 22,
    about: personInfo,
};

person1.about();
person2.about();
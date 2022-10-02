// new keyword

// function createUser(firstName, age){
//     const user = Object.create(createUser.prototype);
//     user.firstName = firstName;
//     user.age = age;
//     return user;
// }

// createUser.prototype.about = function(){
//     console.log(this.firstName, this.age);
// }

// const user1 = createUser("Abdullah", 20);
// user1.about();



//____________________________________________

// function createUser(firstName, age){
//     this.firstName = firstName;
//     this.age = age;
// }

// createUser.prototype.about = function(){
//     console.log(this.firstName, this.age);
// }
// // new keyword will do three things
// // 1) Create an empty object {}
// // 2) Point "this" towards empty object this==> {}
// // 3) return obj

// const user1 = new createUser("Abdullah", 20);
// user1.about();
// console.log(user1.firstName);
// console.log(user1.age);

//_______________________________________________

function CreateUser(firstName, lastName, email, age, address){
    this.lastName = lastName;
    this.firstName = firstName;
    this.email = email;
    this.age = age;
}

CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old`
}

CreateUser.prototype.is18 = function(){
    return this.age >=18;
}

CreateUser.prototype.sing = function(){
    return `Happy Birthday to you`;
}


const user1 = new CreateUser("Komal", "Rauf", "komal@gmail.com", 20, "her address");

console.log(user1.about());
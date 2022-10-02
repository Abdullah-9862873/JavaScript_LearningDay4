// classes

//_____________________________________________



// function CreateUser(firstName, lastName, email, age, address){
    // this.lastName = lastName;
    // this.firstName = firstName;
    // this.email = email;
    // this.age = age;
// }

// // console.log(createUser.prototype);
// CreateUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old`
// }

// CreateUser.prototype.is18 = function(){
//     return this.age >=18;
// }

// CreateUser.prototype.sing = function(){
//     return `Happy Birthday to you`;
// }

// const user1 = new CreateUser("Komal", "Rauf", "komal@gmail.com", 20, "her address");

//_______________________________________________

// We can do the above using classes as:

class CreateUser{
    constructor(firstName, lastName, email, age, address){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
    }

    about(){
        return `${this.firstName} is ${this.age} years old`
    }
    is18(){
        return this.age >=18;
    }
    sing(){
        return `Happy Birthday to you`;
    }
}

const user1 = new CreateUser("Komal", "Rauf", "komal@gmail.com", 20, "her address");

console.log(user1.about());
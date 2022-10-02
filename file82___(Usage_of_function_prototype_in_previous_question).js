// Instead of creating userInfo seperately I'm gonna use function prototype to do this

// ____________________________________________


// const userInfo = {
//     about: function(){
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     is18 : function(){
//         return this.age>=18;
//     },
//     sing : function(){
//         return `Happy Birthday to you...`;
//     },
// };

function createUser(firstName, lastName, email, age, address){
    const user = Object.create(createUser.prototype);
    user.lastName = lastName;
    user.firstName = firstName;
    user.email = email;
    user.age = age;
    return user;
}

// console.log(createUser.prototype);
createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old`
}

createUser.prototype.is18 = function(){
    return this.age >=18;
}

createUser.prototype.sing = function(){
    return `Happy Birthday to you`;
}


const user1 = createUser("Komal", "Rauf", "komal@gmail.com", 20, "her address");

console.log(user1.about());
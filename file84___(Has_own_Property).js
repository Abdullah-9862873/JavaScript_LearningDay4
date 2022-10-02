



function CreateUser(firstName, lastName, email, age, address){
    this.lastName = lastName;
    this.firstName = firstName;
    this.email = email;
    this.age = age;
}

// console.log(createUser.prototype);
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

// for(let key in user1){
//     console.log(key);
// }

// We'll get all the keys from the function inside as well as the prototype of the function... But what if I just want the keys of the function inside and not the prototype...

//________________________________________________

// Using hasownproperty

for(let key in user1){
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
}
// functions inside ojeects are methods


function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.lastName = lastName;
    user.firstName = firstName;
    user.email = email;
    user.age = age;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old`;
    };
    user.is18 = function(){
        return age>=18;
    };
    return user;
}

const user1 = createUser("Komal", "Rauf", "komal@gmail.com", 20, "her address");
console.log(user1);
const is18 = user1.is18();
console.log(is18);
const about = user1.about();
console.log(about);
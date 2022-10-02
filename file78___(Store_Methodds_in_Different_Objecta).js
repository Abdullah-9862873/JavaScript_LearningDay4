// store methods in different objects

//______________________________________________


// function createUser(firstName, lastName, email, age, address){
//     const user = {};
//     user.lastName = lastName;
//     user.firstName = firstName;
//     user.email = email;
//     user.age = age;
//     user.about = function(){
//         return `${this.firstName} is ${this.age} years old`;
//     };
//     user.is18 = function(){
//         return age>=18;
//     };
//     return user;
// }

// const user1 = createUser("Komal", "Rauf", "komal@gmail.com", 20, "her address");


//_________________________________________________

// Here the problem is that if  I have to create more than one users then this function is gonna create .about and .is18 functions for each of the user... In order to solve this problem we create a seperate object

const userInfo = {
    about: function(){
        return `${this.firstName} is ${this.age} years old`;
    },
    is18 : function(){
        return age>=18;
    },
};

function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.lastName = lastName;
    user.firstName = firstName;
    user.email = email;
    user.age = age;
    user.about = userInfo.about;
    user.is18 = userInfo.about;
    return user;
}

const user1 = createUser("Komal", "Rauf", "komal@gmail.com", 20, "her address");
console.log(user1);

const user2 = createUser("shazy", "Rauf", "shahwez@gmail.com", 22, "her address");
console.log(user2);
const user3 = createUser("Abdullah", "ss", "Abdullah@gmail.com", 20, "her address");
console.log(user3);
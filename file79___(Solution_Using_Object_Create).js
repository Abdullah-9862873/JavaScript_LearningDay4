

// const userInfo = {
//     about: function(){
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     is18 : function(){
//         return age>=18;
//     },
// };

// function createUser(firstName, lastName, email, age, address){
//     const user = {};
//     user.lastName = lastName;
//     user.firstName = firstName;
//     user.email = email;
//     user.age = age;
//     user.about = userInfo.about;
//     user.is18 = userInfo.about;
//     return user;
// }

// Here the problem is that we are creating seperate methods in an object and then calling the methods in another function... What if I want to just create the methods in seperate object but not call them everytime inside createUser function... 

// We can use Object.create() to resolve the issue

//____________________________________________

const userInfo = {
    about: function(){
        return `${this.firstName} is ${this.age} years old`;
    },
    is18 : function(){
        return this.age>=18;
    },
    sing : function(){
        return `Happy Birthday to you...`;
    },
};

function createUser(firstName, lastName, email, age, address){
    const user = Object.create(userInfo);
    user.lastName = lastName;
    user.firstName = firstName;
    user.email = email;
    user.age = age;
    return user;
}

const user1 = createUser("Komal", "Rauf", "komal@gmail.com", 20, "her address");
console.log(user1);

// Now I can access directly

console.log(user1.about());
console.log(user1.sing());
console.log(user1.is18());
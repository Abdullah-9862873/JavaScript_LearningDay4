// call method

// function greet(){
//     console.log("Hello");
// }

// greet.call();


// This will call the function

//__________________________________________


// const user1 = {
//     firstName : "Abdullah",
//     age : 20,
//     about: function(){
//         console.log(this.firstName, this.age);
//     },
// };

// user1.about();


//__________________________________________

// const user1 = {
//     firstName: "Abdullah",
//     age : 20,
//     about: function(){
//         console.log(this.firstName, this.age);
//     },
// };

// const user2 = {
//     firstName: "Ahmed",
//     age : 22,
// };

// Now if we want to borrow the about function for user 2 then we have to use the call method

//  user1.about.call(user2);

// Now we are specifying that about will be used with the data of user 2

// The following will throw "undefined" because we have not specified that the call method will be used of which object

//  user1.about.call();


// _________________________________________________

// function about(hobby){
//     console.log(this.firstName, this.age, hobby);
// }

// const user1 = {
//     firstName : "Abdullah",
//     age : 20,
// };

// const user2 = {
//     firstName : "Ahmed",
//     age: 22,
// };

// about.call(user1, "guitar");


//___________________Apply Method________________

// function about(hobby){
//     console.log(this.firstName, this.age, hobby);
// }

// const user1 = {
//     firstName : "Abdullah",
//     age : 20,
// };

// const user2 = {
//     firstName : "Ahmed",
//     age: 22,
// };

// about.apply(user2, ["Guitar"]);

// This is how we use apply


//___________________Bind Method_________________

// Bind method returns a function

function about(hobby){
    console.log(this.firstName, this.age, hobby);
}

const user1 = {
    firstName : "Abdullah",
    age : 20,
};

const user2 = {
    firstName : "Ahmed",
    age: 22,
};

const func = about.bind(user2, "Guitar");
func();
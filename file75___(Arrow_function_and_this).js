// arrow function and this

//________________________________________________

// const user = {
//     firstName : "Abdullah",
//     age: 20,
//     about: function(){
//         console.log(this.firstName, this.age);
//     },
// };

// user.about();
//________________________________________________

// Here if we change the function into an arrow function

const user = {
    firstName : "Abdullah",
    age: 20,
    about: () => {
        console.log(this.firstName, this.age);
    },
};

user.about();

// This will throw "undefined undefined"... Because the "this" in case of arrow function is one step above than the "this" is function expression or declaration...

// One step above means that the "this" in function expression or declaration is user in this case... But in case of arrow function it's one step above which is window...

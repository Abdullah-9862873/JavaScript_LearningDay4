// short syntax to write about function or method inside an object

// const user = {
//     firstName : "Abdullah",
//     age: 20,
//     about: function(){
//         console.log(this.firstName, this.age);
//     },
// };


const user = {
    firstName : "Abdullah",
    age: 20,
    about(){
        console.log(this.firstName, this.age);
    },
};

user.about();
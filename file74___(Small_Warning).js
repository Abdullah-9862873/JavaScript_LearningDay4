// small warning

const user1 = {
    firstName : "Abdullah",
    age: 20,
    about: function(){
        // console.log(this);
        // Here the value of "this" is "window"
        console.log(this.firstName, this.age);
    },
};

// const myInfo = user1.about;
// myInfo();

// This will throw "undefined undefined"... Because the value of "this" is known when we call the function...

// Here we didn't call the function we just stored it inside "myInfo" so the value of "this" inside the about function will remain "window"...

// If we write directly user1.about(), now the value of "this" will be set to "user1"


// In order to bind it we write

const myInfo = user1.about.bind(user1);
myInfo();
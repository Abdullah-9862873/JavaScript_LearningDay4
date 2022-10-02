// function prototype

function hello(){
    console.log("hello world");
}

// javaScript functions ===> function + object

// console.log(hello.name);    // This will print the name of function


// hello.myOwnProperty = "Very unique value";
// console.log(hello.myOwnProperty);

//_______________________________________________

// Prototype

// In javascript when a function is made then an empty space is reserved which is nothing but an empty object... This space is called prototype... You can use it to add key value pairs

// console.log(hello.prototype);   // It exists

// Prototypes are present only in functions

if(hello.prototype){
    console.log("prototype is present");
}else{
    console.log("prototype is not present");
}

//_____________________________________________
// Adding properties or key value pairs in prototype

hello.prototype.sing = function(){
    console.log("Happy Birthday to you....");
}

hello.prototype.sing();

hello.prototype.abc = `Call it to print string abc`;

console.log(hello.prototype.abc);
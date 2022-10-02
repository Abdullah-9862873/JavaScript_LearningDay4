// more aboutt prototype and getPrototypeOf

//________________________________________________
// Arrays have prototype too

// functions have object prototype while arrays have array prototype

console.log(Array.prototype);

function hello(){
    console.log("hello");
}

console.log(hello.prototype);

// You can see one is object while other is array prototype

// ___________________________________________

// In javascript arrays are stored as

let numbers = new Array(1,2,3);

console.log(numbers);
// You can look at the prototypes of arrays now 

console.log(Array.prototype);


// You can look at the prototype using
console.log(Object.getPrototypeOf(numbers));

//________________________________________________
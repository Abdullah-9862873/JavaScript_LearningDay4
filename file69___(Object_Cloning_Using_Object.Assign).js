// Cloning using object.assign

// ______________________________________________


// const obj = {
//     id: 1,
//     firstName : "Abdullah",
// };

// const obj2 = obj;

// console.log(obj);
// console.log(obj2);


// They are stored in heap memory
//___________________________________________________


// const obj = {
//     id: 1,
//     firstName : "Abdullah",
// };

// const obj2 = {...obj};

// obj.gender = "male";

// console.log(obj);
// console.log(obj2);


// Now the changed value is not reflected in obj1

//________________________________________________________


const obj = {
    id: 1,
    firstName : "Abdullah",
};

const obj2 = Object.assign({}, obj);

console.log(obj);
console.log(obj2);
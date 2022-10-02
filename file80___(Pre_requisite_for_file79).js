
// ____________________________________________

// const obj1 = {
//     key1 : "value1",
//     key2 : "value2",
// };

// const obj2 = {
//     key3 : "value3",
// };

// console.log(obj2.key3);     // print value3

// console.log(obj1.key1);     // print value1

// console.log(obj2.key1);     // print undefined

// If I want the JavaScript to work in such a way that if I call obj2.key1 it check the obj2 and see if key1 is present there if not... It straight go to obj1 and check if key1 is present there or not... If it finds then print it

// ____________________________________________


// const obj1 = {
//     key1 : "value1",
//     key2 : "value2",
// };

// const obj2 = {};
// obj2.key3 = "value3";

// You can create an object like this too

//_____________________________________________]



const obj1 = {
    key1 : "value1",
    key2 : "value2",
};

const obj2 = Object.create(obj1);
obj2.key3 = "value3";
// obj2.key1 = "inside obj2"

console.log(obj2.key1);

//________________________________________________

// How this is happening

// We are creating a __proto__ for obj2 and putting obj inside that proto

// __proto__ === [[prototype]]

// These are the same things

console.log(obj2);

// You can look at the proto by
console.log(obj2.__proto__);
// Map structure

// Map structure is used in the places when we want not to fix that the keys remain as strings... Using map allows us to make keys of any datatype...

// Maps are iterables.. You can use for of loop
// Values are stored in the order they are set
//

//_______________________________________________________

// Set and get function

// const person = new Map();
// person.set("firstName", "Abdullah");
// person.set("age", 20);
// person.set(1, "one");

// console.log(person.get("firstName"));
// person.set([1,2,3], "onetwothree");

// console.log(person);

// console.log(person.keys());

// for(let key of person.keys()){
//     console.log(key);
// }

//_______________________________________________________

// Here we have used array destructuring because if we don't use it then it will print in the form of arrays in console

// for(let [key,value] of person){
//     console.log(key,value);
// }


//__________________________________________________________

// Syntax to use map in same line

// const person = new Map([["firstName", "Abdullah"], ["age", 20], [[1,2,3], "onetwothree"]]);
// console.log(person);

//______________________________________________________________

// Use map to add additional things into objects

const person1 = {
    id: 1,
    firstName: "Abdullah",
};

const extraInfo = new Map();
extraInfo.set(person1.id, {age: 20, gender: "male"});
// console.log(extraInfo);

const user1_id = person1.id;
// We take this id as key and get extra info

console.log(extraInfo.get(user1_id));


//________________________________________________________


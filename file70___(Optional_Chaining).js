// optional chaining

// ________________________________________________________


// const user = {
//     firstName : "Abdullah",
//     address: {housenumber: 12},
// };

// console.log(user.firstName);
// console.log(user.address);
// console.log(user.address.housenumber);


// ________________________________________________________

// const user = {
//     firstName : "Abdullah",
//     // address: {housenumber: 12},
// }

// console.log(user.firstName);
// console.log(user.address);  // this will throw undefined
// console.log(user.address.housenumber); // this will throw error


// ________________________________________________________

// To avoid error we use optional chaining

const user = {
    firstName : "Abdullah",
    // address: {housenumber: 12},
}

console.log(user?.firstName);
console.log(user?.address?.housenumber);

// Now we get undefined instead of error because it check ke kia user ke andar address hai?? agar nai toh yahin undefined de do

//_______________________________________________________-
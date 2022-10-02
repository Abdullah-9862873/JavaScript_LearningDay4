// getters and setters

// class Person {
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// const Person1 = new Person("Abdullah", "Sultan", 20);

// console.log(Person1.fullName);

// The above line will give me the function so I have to write console.log(Person1.fullName()); in order to get the desired output so I have to treat "fullName" as a function... But what if I want to treat it as a property and not the function... This is done by using get keyword


//_____________________________________________________


class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const Person1 = new Person("Abdullah", "Sultan", 20);
console.log(Person1.fullName);

Person1.fullName = "Komal Rauf";
console.log(Person1.fullName);
// static methods and properties

class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // static method
    static classInfo(){
        return `This is Person class`;
    }
    // static property
    static title = "the title of this class is Person";
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// We can directly call the static methods with the class name and there is no need to make an object or instance to call these methods

console.log(Person.classInfo());
console.log(Person.title);
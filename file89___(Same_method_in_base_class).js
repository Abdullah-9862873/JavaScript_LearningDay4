class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`;
    }

    isSuperCute(){
        return this.age<1;
    }
    isCute(){
        return true;
    }
}

class Dog extends Animal{
    constructor(name,age, speed){
        super(name, age);
        this.speed = speed;
    }
    eat(){
        return `modifided eat: ${this.name} is eating`;
    }
    run(){
        return `${this.name} is running at ${this.speed}kmph`;
    }
}

const tommy = new Dog("tommy", 3, 45);
console.log(tommy.run());
console.log(tommy.eat());

// Here we can see that the tommy.eat() method is looking for the eat function first in it's own class and then in the parent class
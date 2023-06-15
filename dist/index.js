"use strict";
console.log('test');
let users = [
    {
        name: 'Shoha Tsuchida',
        age: 99,
        company: 'Coding Temple'
    },
    {
        name: 'Dylan Katina',
        age: 99
    }
];
let day = "Monday";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = () => {
            return `${this.firstName} ${this.lastName}`;
        };
    }
}
class Employee extends Person {
    constructor(firstName, lastName, salary) {
        super(firstName, lastName);
        this.salary = salary;
    }
}
let employee = {
    name: 'Christian Askew',
    salary: 1000000,
    address: {
        street: 'Thieves st',
        city: 'Seattle',
        zipCode: 98101
    }
};

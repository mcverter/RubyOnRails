/**
 * Created by mitchell_verter on 5/19/16.
 */
function greeter(person : string) {
    return "Hello, " + person;
}

var user = "Jane User";

document.body.innerHTML = greeter(user);

interface Person {
    firstName: string;
    lastName: string;
}


function personGreeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var sloozer = {firstName:  "ayeesha", lastName: "shaik"};

document.body.appendChild(personGreeter(sloozer));


class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

var stuser = new Student("Jane", "M", "Student");

personGreeter(stuser);
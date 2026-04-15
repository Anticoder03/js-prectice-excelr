// function person(){

// }
// let p = new person();
// console.log(p)

// function person2(name,email,phone){
//     this.name = name;
//     this.email = email;
//     this.phone = phone;
// }
// let p2 = new person2("John Doe", "john@example.com", "123-456-7890");
// console.log(p2);


class Person {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}

let p3 = new Person("Jane Doe", "jane@example.com", "098-765-4321");
console.log(p3);

let p4 = {
    name: "Alice Smith",
    email: "alice@example.com",
    phone: "555-123-4567"
}
console.log(p4);

let p5 = Object.create(p4);
console.log(p5);

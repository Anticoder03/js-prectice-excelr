let animal = {
    species: "Dog",

}
// console.log(animal);
// console.log(animal.species);
// console.log(animal.Species);
// console.log(animal.name);




// animal.species = "Cat";
// console.log(animal.species);
// animal.name = "Buddy";
// console.log(animal.name);


function Student(f_name, lname, year_of_birth) {
    this.f_name = f_name;
    this.lname = lname;
    this.year_of_birth = year_of_birth;
    this.age = ()=>{ return new Date().getFullYear() - year_of_birth; };
}

let s1 = new Student("John", "Doe", 1990);

console.log(s1.f_name);
console.log(s1.lname);
console.log(s1.year_of_birth);
console.log(s1.age());

// add email
Student.prototype.email = "mail.com";
console.log(s1.email);

Student.prototype.getFullName = function() {
    // string interpolation
    return `${this.f_name} ${this.lname}`;
    // return this.f_name + " " + this.lname;
}
console.log(s1.getFullName());
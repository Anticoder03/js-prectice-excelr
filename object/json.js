let obj = {
    name : "Ashish",
    age : 25,
    city : "Delhi",
}

// console.log(obj);

let info = JSON.stringify(obj);
// console.log(info);




let obj2 = JSON.parse(info);
// console.log(obj2);

// nested json

let nestedObj = {
    name : "Ashish",
    age : 25,
    city : "Delhi",
    hobbies : ["coding", "gaming", "traveling"],
    education : {
        degree : "Bachelor's",
        field : "Computer Science",
        university : "XYZ University"
    }
}

// console.log(nestedObj);


// function fetchData(){
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error("Error fetching data:", error));
// }

async function fetchData(){
    let res = await fetch("https://jsonplaceholder.typicode.com/users/2");
    let data = await res.json();
    // console.log(data['username']);
    // console.log(res);

    // get username from the data
    console.log(data['username']);

    let res2 = await fetch("https://jsonplaceholder.typicode.com/users/3");
    let data2 = await res2.json();
    // console.log(data2);
}



// fetchData();

// let res = fetch("https://jsonplaceholder.typicode.com/posts/3");
// console.log(res['username'])

// let ob1 = {
//     name : "Ashish",
//     age : 25,
//     city : "Delhi",
// }

// let ob2 = {
//     // name : "JavaScript", overrite
//     duration : "3 months",
//     level : "Beginner",
// }

// let combinedObj = {...ob1, ...ob2};
// console.log(combinedObj);

// delete combinedObj.age;
// console.log(combinedObj);


// let obj1 = {
//     name : "Ashish",
//     email:"ashish@example.com",
//     phone:"1234567890",
// }
// console.log(obj1);

// let {name, email} = obj1;

// console.log(name);
// console.log(email);



// let {name:user, phone:ph} = obj1;

// console.log(user);
// console.log(ph);


// // add new properties to obj1

// let {address = "Not provided", company = "Not provided"} = obj1;

// console.log(address);
// console.log(company);

// console.log(obj1);


async function fetchUserData(){
    let res = await fetch("https://jsonplaceholder.typicode.com/users/2");
    let data = await res.json();
    // console.log(data['username']);
    console.log("only keys");
    for (let key in data){
        console.log(`${key}`);
    }
    console.log("only values");

    for (let key in data){
        console.log(`${data[key]}`);
    }
    console.log("both keys and values");

    for (let key in data){
        console.log(`${key} : ${data[key]}`);
    }

}

// fetchUserData();


Object.keys(obj).forEach(key => {
    console.log(`${key} : ${obj[key]}`);
});

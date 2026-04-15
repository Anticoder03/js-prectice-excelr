// (
//     function() {
//         console.log("This is an IIFE (Immediately Invoked Function Expression)");
//     }
// )();

// (
//     function(name) {    
//         console.log(`Hello, ${name}! This is an IIFE with a parameter.`);
//     }
// )("Ashish");

// function* generatorFunction() {
//     yield "First value";
//     yield "Second value";
//     yield "Third value";
// }
// const generator = generatorFunction();

// console.log(generator);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);


// function* excelrGenrator(){
//     let val =1;
//     while(val<=50){
//         yield "excelr_00"+val;
//         val++;
//     }
// }

// let excelr = excelrGenrator();

// let num = 1;
// while(num<=50){
//     console.log(excelr.next().value);
//     num++;
// }


function f1 (){
    return "This is a regular function.";
}

function f2 (){
    return "This is a  function.";
}

// console.log(f1());
// console.log(f2());


function add(a,b){
    return a+b;
}
function multiply(a,b){
    return a*b;
}
function subtract(a,b){
    return a-b;
}
function divide(a,b){
    return a/b;
}

function calculator(a,b,operation){
    return operation(a,b);
}


// console.log(calculator(10,5,add));
// console.log(calculator(10,5,multiply));
// console.log(calculator(10,5,subtract));
// console.log(calculator(10,5,divide));


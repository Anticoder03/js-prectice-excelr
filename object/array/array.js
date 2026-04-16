// let arr2 = [1,2,12.34,true,"Hello",null,undefined]
// console.log(arr2);

//! --------------- craeteing array in js ------------------

//? cerate array using array literal

// let arr = [10,20,30]
// console.log(arr);
// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);



//? create array using array constructor
// let arr2 = new Array(10,20,30);
// console.log(arr2);

// let arr3 = new Array(5); // creates an array of length 5 with empty slots
// console.log(arr3);
// console.log(arr3.length);
// console.log(arr3[0]); // undefined


// //? create array using Array.from()
// let val = "Ashish";
// let arr4 =  Array.from(val);
// console.log(arr4);

// //? create array using Array.of()
// let arr5 = Array.of(10,20,30);
// console.log(arr5);
// let arr6 = Array.of(5); // creates an array with a single element 5
// console.log(arr6);

// // locate the element of an element in an array using at method

// let arr8 = [10, 20, 30, 40, 50];
// console.log(arr8.at(2)); // 30
// console.log(arr8.at(-1)); // 50 (last element)
// console.log(arr8.at(10)); // undefined (index out of bounds)


// let arr9 = [1,2,3,4];

// arr9[2] = 'hello';
// console.log(arr9);

// push , unpush, shift, unshift

// let arr9 = [1,2,3,4];
// arr9.push(5); // adds 5 at the end of the array
// console.log(arr9);

// arr9.pop();
// console.log(arr9);

// arr9.unshift(0);
// console.log(arr9);

// arr9.shift();
// console.log(arr9);

// // delete 
// delete arr9[1]; // deletes the element at index 1 but does not change the length of the array

// console.log(arr9);

// // add at any index
// arr9[1] = 20;
// console.log(arr9);


// console.log("------------------ using while loop ---------------------");


// let arr = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
// let i = 0
// while(i < arr.length){
//     console.log(arr[i]);
//     i++;
// }
// console.log("------------------ using for loop ---------------------");


// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element);
// }

// console.log("------------------ using do while loop ---------------------");
// let j = 0;
// do {
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);

// console.log("------------------ using for each loop ---------------------");
// arr.forEach((element) => {
//     console.log(element);
// });


// square of every element in the array
let arr = [1,2,3,4,5];
let squaredArr = arr.map((element) => element * element);
console.log(squaredArr);


// retirn even numbers from the array
let evenArr = arr.filter((element) => element % 2 === 0);
console.log(evenArr);

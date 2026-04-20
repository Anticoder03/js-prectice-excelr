let arr = [10,3,43,223,44]

//? find Sum of array elements

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
// console.log(sum)

//? using forEach

sum = 0;
arr.forEach(element => {
    sum += element;
});
// console.log(sum)

//? other approch

let sum1 = arr.reduce((acc, curr) => acc + curr, 0);
// console.log(sum1)


// find maxmimum number form array
let max = arr[0];

for (let i = 1; i < arr.length; i++) {  
    if (arr[i] > max) {
        max = arr[i];
    }
}
// console.log(max)

//? using reduce

let max1 = arr.reduce((acc, curr) => acc > curr ? acc : curr, arr[0]);
// console.log(max1)

//? SORTED function
arr2 = arr.sort((a, b) => a - b);
// console.log(arr2[arr2.length - 1])
// console.log(arr2[0])


// ? max function
// console.log(Math.max(...arr))
// console.log(Math.min(...arr))

let students = [
    { name: "A", marks: 20 },
    { name: "B", marks: 22 },
    { name: "C", marks: 19 },
    {name: "D", marks: 25},
];

students.sort((a, b) => b.marks - a.marks);
// console.log(students)    
// console.log(students.reverse())

// REMOVE DUPLICATE ELEMENTS FROM ARRAY
let arr3 = [1, 2, 3, 4, 5, 1, 2, 3];

let uniqueArr = [...new Set(arr3)];
// console.log(uniqueArr)

let repeted_arr = [1,2,3,4,5,1,2,3];

let unique_arr = [...new Set(repeted_arr)];
// console.log(unique_arr)

// console.log(uniqueArr[uniqueArr.length - 2])
// console.log(uniqueArr[1])


arr3 = [1, 2, 3, 4, 5, 1, 2, 3];
let unique = [];

for (let i = 0; i < arr3.length; i++) { 
    if (!unique.includes(arr3[i])) {
        unique.push(arr3[i]);
    }   
}
// console.log(unique)


let largest = -Infinity;
let second_largest = -Infinity;

for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] > largest) {
        second_largest = largest;
        largest = arr3[i];
    } else if (arr3[i] > second_largest && arr3[i] !== largest) {
        second_largest = arr3[i];
    }
}
console.log(largest)
console.log(second_largest)


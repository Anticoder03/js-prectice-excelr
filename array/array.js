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


// ? max function
// console.log(Math.max(...arr))

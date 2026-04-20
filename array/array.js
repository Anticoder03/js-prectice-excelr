let arr = [10,3,43,223,44]

//? find Sum of array elements

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum)

//? using forEach

sum = 0;
arr.forEach(element => {
    sum += element;
});
console.log(sum)

//? other approch

let sum1 = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum1)
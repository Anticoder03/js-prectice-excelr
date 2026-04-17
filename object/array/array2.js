let arr = [1,2,3,4,5]

// let sum = arr.reduce((sum,value)=>{
//     return sum + value;
// },0);


// console.log(sum);




// let mul = arr.reduce((m,value)=>{
//     return m * value;
// },1);


// console.log(mul);

let res = arr.filter((value)=>{
    return value % 2 === 0;
}).reduce((m,value)=>{
    return m * value;
},1);

// console.log(res);

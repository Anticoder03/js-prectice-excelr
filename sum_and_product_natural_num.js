function sum_num(n){
    sum=0
    for (let i =1;i<=n;i++){
        sum+=i;
    }
   console.log(`Product of first ${n} is: ${sum}`)
}

sum_num(10)

function mul_num(n){
    mul=1;
    for (let i=1;i<=n;i++){
        mul *= i
    }
    console.log(`Product of first ${n} is: ${mul}`)
}
mul_num(10)
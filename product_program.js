function sum (num){
     let sum=0;
    do{
        // console.log(` value od a is : ${a}`)
        let temp = num%10;
        sum += temp;

        num = Math.floor(num/10);

    }while(num>0);
    console.log(sum)
}
    function product (num){
         let mul=1;
    do{
        // console.log(` value od a is : ${a}`)
        let temp = num%10;
       
        mul *= temp;

        num = Math.floor(num/10);

    }while(num>0);
    console.log(mul)

    }

sum(153)
setTimeout(()=>{
    product(153)

},5000)
    
//    let str="this is javascript session";
//     //       This Is Javascript Session
// //           thiS iS javascripT sessioN 
//     //       ThiS IS JavascripT SessioN
//     let res="";
//     let  words=str.split(" ");
//     for (const element of words) {
//     //  res=res+element.charAt(0).toUpperCase()+element.slice(1)+" ";
//     res=res+element.slice(0,element.length-1)+element.charAt(element.length-1).toUpperCase()+" ";      
//     } 
//     console.log(res);
    



        //  10 -- 10
          let num=10;
          console.log(num.toString(2)); // convert number into binary number-- 2 indicates for binary


        //   Bitwise And

        let a=5 // 10 1
        let b=3 // 01 1
        // ---------------
                    // 0 0 1

            console.log(a&b); //001   -- decimal --1

        //  1 0 1
        //  0 1 1
        // ----------
            // 1 1 1

           console.log(a|b);//111---deciaml -7
           
        //  1 0 1
        //  0 1 1
        // ----------
        //    1  1  0   

        console.log(a^b);//110 -- deciaml -6

        // 101 -- 0 1 0
        console.log(~a);//010  -- decimal---- -6
        
        // 5*2  -- 
        console.log(a<<1); //10
        // 5*2*2
        console.log(a<<2); //20
        // 5*2*2*2
        console.log(a<<3); //40
        
       // 5/2---2
        console.log(a>>1);//2
        



        // let value=7;
        // 0  1  1  1
        // 0  0  0  1
        // ----------------
// &       0  0  0  1  --- last digit is one ---odd number


       let value=6

    //     1 1 0
    //     0 0 1
    // --------------
    // &   0 0 0  --- last digit is zero --even number
    
        if(value&1){
            console.log("odd number");
            
        }else{
            console.log("even number");
            
        }
       

        // if(value%2==0){
        //     console.log("even");
            
        // }else{
        //     console.log("odd");
            
        // }

          


function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    let jump1=x1;
    //console.log(jump1);
    let jump2=x2;
    //console.log(jump2);        
    for (let i = 0; i <= 10000; i++) {
        jump1=jump1+v1
        jump2=jump2+v2
        //console.log(jump1);
        console.log(jump2);
        if(jump1 === jump2 ){
            return 'YES'
        }else if(i===10000 && jump1 !== jump2){
            return 'NO'
        }
        }
    }
let jump; 
//jump = kangaroo(0, 3, 4, 2)
//jump = kangaroo(0, 2, 5, 3)
//jump = kangaroo(28, 8, 96, 2)
console.log(jump);
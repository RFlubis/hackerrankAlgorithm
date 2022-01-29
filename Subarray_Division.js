function birthday(s, d, m) {
    // Write your code here
    //set new array to collect array containing the number of calculation d
    let newArr=[]
    //set another array to proces the calculation
    let calc=[]
    //set let for calculation confirmation
    let conf=0;
    let counter=0;
    //double iterate s
    if (s.length===1){
        if(s[0]===d){
            counter++
            return counter
        } else if(m<=1){
            return counter
        }
    } else{
            for (let i = 0; i < s.length; i++) {
                //push the curent index
                calc.push(s[i])
                //console.log(s[i]);
                if(calc.length===1){
                    for (let j = i+1; j < s.length; j++) {
                    calc.push(s[j])
                    //console.log(s[j]);
                        if(calc.length === m){
                            for (let k = 0; k < calc.length; k++) {
                                conf+=calc[k]
                                //console.log(conf);
                                if(conf === d && k===calc.length-1){
                                    counter++
                                }
                            }
                            newArr.push(calc)
                            conf=0
                            break;
                        }  
                    }
                }
                calc = [] 
            }
    }
     //console.log(newArr);
     //console.log(counter);
    return counter;
}

let sub
// sub=birthday([1,2,1,3,2], 3, 2)
// sub=birthday([2,2,1,3,2], 4, 2)
sub=birthday([4], 4, 1)
console.log(sub);
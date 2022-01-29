function getTotalX(a, b) {
    // Write your code here
    let reminder1=[];
    let reminder2=[];
    let counter=0
    for (let i = 1; i < 10; i++) {
        let times=a[0]*i
        for (let j = 1; j < a.length; j++) {
            if(times%a[j]===0){
                reminder1.push(times)
                //continue;        
            }
        }
    }
    for (let k = 0; k < reminder1.length; k++) {
        for (let n = 0; n < b.length; n++) {
            //console.log(b);
            //console.log(reminder1);
            if(b[n]%reminder1[k]===0){      //the focus 1
                //console.log(b[n]%reminder1[k]===0);
                reminder2.push(reminder1[k])
            } 
        }
    }
   for (let l = 0; l < reminder2.length; l++) {
       let pair;
       if(reminder2[l]!==pair){                 //How to count the number of element that pass the calculation of the other element..?
           counter++
           pair=reminder2[l]
       }
   }
    console.log(reminder1);
    console.log(reminder2);
    console.log(counter);
    //return reminder2.length
}
let set; 
//set=getTotalX([2, 4], [16,32,96])
  set=getTotalX([3, 4], [24,48])
//console.log(set);

//////////unfinnished
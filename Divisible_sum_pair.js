function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let arr=[]
    let arr2=[]
    //let counter=0;
    for (let i = 0; i < n; i++) { //change
    
        for (let j = 1; j < n; j++) {
            if((ar[i]+ar[j])%k===0 &&i<j){

             arr.push(ar[i],ar[j])
             arr2.push(arr)
             
            //counter++
            }
            arr=[]
        }
    
    }
    //console.log(arr2);
    //console.log(arr2.length);
    //console.log(counter);
    return arr2.length
    //return counter
} 
let div;
//div=divisibleSumPairs(6, 3,[1,3,2,6,1,2]) //return 5
div=divisibleSumPairs(10, 3,[29,97,52,86,27,89,77,19,99,96]) //return 15
console.log(div);

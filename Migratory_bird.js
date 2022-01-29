function migratoryBirds(arr) {
    // Write your code here
    let counter=0
    let newArr2=[];
    let newArr3=[];
    let newArr4=[];
    for (let i = 1; i <= 5; i++) {
            newArr2.push(i)
            for (let j = 0; j < arr.length; j++) {
                if (i===arr[j]){
                    counter++
                }
            }
        newArr2.push(counter)
        counter=0
        newArr3.push(newArr2)
        newArr2=[]
    }
    console.log(newArr3);
    let high=0
    for (let k = 0; k < newArr3.length; k++) {
        if(newArr3[k][1]>high){
            high=newArr3[k][1]
        }
    }
    for (let l = 0; l < newArr3.length; l++) {
        if(newArr3[l][1]===high){
            newArr4.push(newArr3[l][0])
        }
    }
    let lower=newArr4[0]
    for (let m = 0; m < newArr4.length; m++) {
        if(newArr4[m]<lower){
            lower=newArr4[m]
        }
    }
    // console.log(high);
    // console.log(newArr3);
    //console.log(newArr4);
    // console.log(lower);
    return lower
}
let bird;
//bird=migratoryBirds([1,4,4,4,5,3]) //return 4
bird=migratoryBirds([1,2,3,4,5,4,3,2,1,3,4]) //return 3
console.log(bird);

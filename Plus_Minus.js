let arr1=[1,-2,-3,4,0,4]

let countPlus=0;
let countMinus=0;
let countZero=0;

for (let i = 0; i < arr1.length; i++) {
   if (arr1[i] === 0) {
    countZero = countZero + 1  /arr1.length
    continue;
   }
   if (arr1[i] < 0) {
    countMinus = countMinus + 1 /arr1.length
    }
    else{
    countPlus = countPlus + 1 /arr1.length
    }
    
}
console.log(countPlus);
console.log(countMinus);
console.log(countZero);
console.log('hello World');

let array1 = [
  [-2, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let sum=0 ;
let sum1 = 0;
let sum2 = 0;
let post= 0;



for (let i = 0; i < array1.length; i++) {
  //console.log(array1[i]);
  for (let j = 0; j < array1[i].length; j++) {
    //console.log(array1[i][post]);
    sum1 = sum1 + array1[i][post];
    break;
  }
  post++
}

post=0;

for (let k = array1.length - 1; k >= 0; k--) {
  //console.log(array1[k]);
  for (let l = array1[k].length - 1; l >= 0; l--) {
    //console.log(array1[k][post]);
    sum2 = sum2 + array1[k][post];
    break;
  }
  post++
}

sum = sum1 - sum2;
console.log(sum1);
console.log(sum2);
console.log(sum);


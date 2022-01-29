/*let arr=[1, 3, 5, 7, 3, 5];
//let arr=[5, 5, 5, 5, 5];
let big=0;
let smol=arr[0];
let rest=[];
let min=0;
let max=0;

for (let i = 0; i < arr.length; i++) {
   if (arr[i]>=big) {
      big = arr[i]
   }
   if (arr[i]<=smol) {
      smol = arr[i]
   }
}
for (let j = 0; j < arr.length; j++) {
   if (arr[j]===big) {
      
   }
   else{
      //rest.push(arr[j])
      min+=arr[j]
   }
   
}
for (let k = 0; k < arr.length; k++) {
   if (arr[k]===smol) {
      
   }
   else{
      //rest.push(arr[k])
      max+=arr[k]
   }
   
}

console.log(big, smol, rest, min, max); 
*/
////////////////////////////////////////////////////////


let array_input = [1,2,3,4,5]

function summation(array, index){
   let res = 0
   for (let i = 0; i < array.length; i++) {
      if (index!==i) {   // detecting current index of the loop and to not included in calculation
         res += array[i] //summing array index [i](current) with the remaining element
         
      }
   }
   return res
}


let array_results = []


function loopWithException(array){
   for (let i = 0; i < array.length; i++) {
      let sum = 0
      sum = summation(array, i) //summation function invokation
      array_results[i] = sum //assigning sum to new array at [i](current) index
      
   }
   return array_results
}
array_results=loopWithException(array_input);
let big=0;
let smol=array_results[0];


for (let i = 0; i < array_results.length; i++) {
   if (array_results[i]>=big) {
      big = array_results[i]
   }
   if (array_results[i]<=smol) {
      smol = array_results[i]
   }
}

//console.log(loopWithException(array_input));
console.log(big, smol);
console.log(array_results);
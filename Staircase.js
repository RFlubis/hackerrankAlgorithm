let num = 6;
let str='';

for (let i = 1; i <= num; i++) {
    for (let k = 0; k < num - i; k++) {
        str += '#'
        
    }
   for (let j = 0; j < i; j++) {
       str += ' '
       
   }
   str += '\n'
    
}

console.log(str);
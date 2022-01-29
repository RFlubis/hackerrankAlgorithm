function dayOfProgrammer(year) {
    // Write your code here
    let feb=0
    let day;
    let total;
    if(year<=1918){
        if(year===1918){
            feb=15
        }else if(year%4===0){
            feb=29
        }
        else{
            feb=28
        }
    } else{
        if(year%400===0||(year%4===0&&year%100!==0)){
            console.log('lol');
            feb=29
        } else{
            console.log('not lol');
            feb=28
        }
    }
    total=feb+(30*2)+(31*5)
    day=256-total
    // console.log(total)
    // console.log(day);
    return`${day}.09.${year}`
}
let year;
// year = dayOfProgrammer(2017) //13.09.2017
// year = dayOfProgrammer(2016) //12.09.2016
// year = dayOfProgrammer(1800) ////12.09.2016
// year = dayOfProgrammer(2700) ////13.09.2700
year = dayOfProgrammer(1918) ////26.09.1918
console.log(year);

// console.log(1918%400);
// console.log(1918%4);
// console.log(1918%100);
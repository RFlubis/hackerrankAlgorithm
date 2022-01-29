function grading(grades) {
    let sum=[];

    for (let i = 0; i < grades.length; i++) {
        let modul=grades[i]%5      //get the reminder of number
        //console.log(modul);
        if(modul >= 3 && grades[i] >= 38){  //if the reminder is greater or equal than 3
            sum.push(grades[i]+(5-modul))   //push the index plus 5 minus reminder 
        } else{
            sum.push(grades[i])             //push the unmodified value
        }
        //console.log(grades[i]+(5-modul));
    }
    return sum
    //console.log(sum);
    //console.log(grades);
}

let temp=grading([73, 67, 38, 33]);
//temp=grading(67);
//temp=grading(38);
//temp=grading(33);
console.log(temp);
//console.log('hello');
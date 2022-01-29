function breakingRecords(scores) {
    // Write your code here
    //set new highestscore array and highest number
    let highestNumber=0
    let highest=[]
    //set new lowestscore array and lowest number
    let lowestNumber=0
    let lowest=[]
    //set counter for return
    let counter=[0, 0];
    //iterate through scores array
    for (let i = 0; i < scores.length; i++) {
        //set whatever number in the first array for comparing and push that number into both arrays
        if(i===0){
            highestNumber=scores[i]
            highest.push(highestNumber)
            lowestNumber=scores[i]
            lowest.push(lowestNumber)
        //check if current indexes score is higher than curent highest number
        //if yes, set current score into highest number, than push that highest number to highest array
        //also add 1 to counter
        } else if(scores[i] > highestNumber){
            highestNumber=scores[i]
            highest.push(highestNumber)
            counter[0]+=1
        //prettymuch the same with the highest case.., only its set for the lowest by comparing current score with current lowest number
        //yada yada....... 
        } else if(scores[i] < lowestNumber){
            lowestNumber=scores[i]
            lowest.push(lowestNumber)
            counter[1]+=1
        }
    }
    //console check for output
    // console.log(highest);
    // console.log(lowest);
    // console.log(counter);
    return counter;
}
let record;
//record = breakingRecords([2,30,21,12,5,4,1,87,65]);
record = breakingRecords([10,5,20,20,4,5,2,25,1]);
console.log(record);
//console.log('hello');
//remote check done

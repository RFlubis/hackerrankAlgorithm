// function getHour(string){
//     let num=string.split(':', 3);
//     let num2=[];
//     let modifier='';

//     for (let i = 0; i < num.length; i++) {
//         if(num[i]==='A'){
//             modifier = "AM"
//             break;
//         }
//         if (num[i]==='P') {
//             modifier = "PM"
//             break;
//         } 
//         else{
//             num2.push(parseInt(num[i]))
//         }       
//     }
//      console.log(num);
//      console.log(num2);
//      console.log(modifier);
//     // hour = num[0]+num[1]
//     //console.log(hour);
// }

////////////////////////////////////////////////////////////

function timeConversion(s) { 
    //let converted_time = ''
	let hours = s[0]+s[1]           //templet literal for string handling or string spliting
	let minutes = s[3]+s[4]         //templet literal for string handling or string spliting
	let seconds = s[6]+s[7]         //templet literal for string handling or string spliting
	let perimeter = s[8]+s[9]       //templet literal for string handling or string spliting
	//console.log(hours, minutes, seconds, perimeter);
	
	console.log(hours*1 !== 12);
	if (perimeter === 'PM' ) {
		if (hours*1 !== 12) {
            hours=(hours*1)+12      // convert the string by multiplying witn numeric 1 and add aditional 12 to hours
		}
        // if (hours == 12){		//
        //     hours=(hours*1)		// Added band aid patch
        // }						//
	}
	console.log(hours*1 === 12);
	if (perimeter === 'AM') {
		if (hours*1 === 12){           // band aid patch, loose the strictness, reduce the =
            hours=(hours*1)-12      //convert the string by multiplying witn numeric 1 and reset the hours to 00
		}
	}
	hours = hours + ''              //Spacing in th hour coloum 
	if (hours.length === 1){        //if the number length are 1, put some 0 in
		hours = `0${hours}`         // templet literal
	} 
	return `${hours}:${minutes}:${seconds}` //display templete literal
} 

console.log(timeConversion('12:45:54PM'))
console.log(timeConversion('12:00:50AM'))
console.log(timeConversion('05:00:50AM'))

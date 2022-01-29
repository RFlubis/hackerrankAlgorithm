/*function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let pointA=[]
    let pointO=[]
    let apel=[]
    let jeruk=[]
    for (let i = 0; i < apples.length; i++) {
        pointA.push(apples[i]+a) 
    }
    for (let i = 0; i < oranges.length; i++) {
        pointO.push(oranges[i]+b)
    }
    for (let j = 0; j < pointA.length; j++) {
        if(pointA[j]>=s && pointA[j]<=t){
            //console.log(pointA[j]);
            //return pointA[j]
            apel.push(pointA[j])
        }
    }
    for (let j = 0; j < pointA.length; j++) {
        if(pointA[j]>=s && pointO[j]<=t){
            //console.log(pointO[j]);
            //return pointO[j]
            jeruk.push(pointO[j])
        }
    }
    console.log(jeruk.length);
    console.log(apel.length);
    //return`${jeruk.length} ${apel.length}`
}
*/


///////////////////////////////////////////////////
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let apleCounter=0
    let orangeCounter=0

    for (let i = 0; i < apples.length; i++) {
        if(apples[i]+a>=s && apples[i]+a<=t){
            apleCounter++
        } 
    }
    for (let i = 0; i < oranges.length; i++) {
        if(oranges[i]+b>=s && oranges[i]+b<=t){
            orangeCounter++
        }
    }
   
    console.log(apleCounter);
    console.log(orangeCounter);
}




let down = countApplesAndOranges(7, 11, 5, 15, [-2,2,1], [5,-6])
//console.log(down);
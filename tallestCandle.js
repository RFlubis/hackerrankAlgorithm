let [a, b, c, d, e]=[1, 2, 3, 4, 5]
let arr=[1,2,3,4,5,4,5,3]

function candle(n){
    //let bundle=[];
    let big = 0;
    let counter = 0;
    //bundle.push(n);
    for (let i = 0; i < n.length; i++) {
        if (n[i] > big) {
            big = n[i]
        }
    }
    for (let j = 0; j < n.length; j++) {
        if (n[j] === big) {
            counter++
        }
        
    }
    console.log(n, big, counter);
    return counter
}
let blow=candle(arr);
console.log(blow);
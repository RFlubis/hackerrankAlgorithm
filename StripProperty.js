let newObj={};

function stripProperty(obj = undefined, prop=undefined) {
    if(typeof obj === Number) {

    }
    
    newObj = {[obj]:prop}
    console.log(newObj);
    //console.log(newObj.length);

    for (let i = 0; i < newObj.length; i++) {
    //console.log(`${newObj[i]}`);
    
    }
    // if(typeof newObj.obj === undefined){
    // }

    
}
 stripProperty('lol',201);
 stripProperty(undefined,202);
 stripProperty('notlol',undefined);

 //need review, SKIPED
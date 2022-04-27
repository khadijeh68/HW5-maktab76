function mostExpensive(obj){
    let val = Object.values(obj);
    console.log(val);
    let max = val[0];
    for (let i = 0 ; i < val.length ; i++){
        let value = val[i]
        if (value > max) {
            max = value;
        }
    }
    return Object.keys(obj).find(key => obj[key] === max);    
}
let obj2 = {
    "Diamond Earrings": 980,
    "Gold Watch": 250,
    "Pearl Necklace": 4650
    };
 console.log(` "The most expensive one is ${mostExpensive(obj2)} "`)

  

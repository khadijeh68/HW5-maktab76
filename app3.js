function mapping(array){
    let obj = {};
    let total = {};
        obj = {...array};
        console.log(obj);
        let obj2 = Object.values(obj);
        total = obj2.map(function(item,index){
          item =  item.toUpperCase();
            return `"${array[index]}" : "${item}"`;            
        })  
        console.log({total});
       //console.log(`{${total}}`)  
                
}
mapping(["a", "b", "c"]);
function sumBudgets(obj){
    let getSum = obj.map(function(item){
        return item.budget;
    }).reduce(function(acc,val){
        return acc + val;
    } , 0);
    console.log(`Sum of People's Budget is: ${getSum}`);
}

let getBudgets = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }
];
sumBudgets(getBudgets);


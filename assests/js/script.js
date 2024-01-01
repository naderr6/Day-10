function sum (x,y){
    return x+y
}

let EnhancedSum = (x, y, ...args)=>{
    sm = x+y;
    if (args.length !=0){
        for (let i = 0; i < array.length; i++) {
            sm += array[i];
        }
    }
    return sm;
}

////////
let arr1 = ["one", "two"];
let arr2 = ["three","Four", "five", "six","seven"];
let arr3 = [...arr1, 9, 2, 0, 7, 0, 7];
console.log(arr1)
console.log(arr2,...arr3)

// console.log(EnhancedSum(...arr3))
// console.log(...arr3)
// console.log(EnhancedSum(9, 2, 0, 7, 0, 7))

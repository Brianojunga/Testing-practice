export function analyzeArray(arr){
    return{
        average :  (arr.reduce((total, item) => total + item, 0)) / arr.length,
        min : Math.min(...arr),
        max : Math.max(...arr),
        length : arr.length
    }
}

console.log(analyzeArray([1,8,3,4,2,6]))
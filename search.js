let array= [2,43,31,212,43,112,3]

const binarySearch = (arr, targer)=>{
    
    if(arr.length === 0){
        console.log("array is empty");
        
        return -1
    }
    let start = 0;
    let end = arr.length - 1;
     while(start <= end){
        let middle = Math.floor(start + (end - start)/2);
        if(arr[middle] === targer){
            return middle
        }else if (targer > arr[middle]){
            start = middle + 1;

        }else{
            end = middle - 1;
        }
     }
     return -1
}
let sortedArray = array.sort((a,b)=>a-b);
console.log(sortedArray);


console.log(binarySearch(sortedArray,2))
console.log(binarySearch(sortedArray,3))
console.log(binarySearch(sortedArray,31))
console.log(binarySearch(sortedArray,212))
console.log(binarySearch(sortedArray,100))

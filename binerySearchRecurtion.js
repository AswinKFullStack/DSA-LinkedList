function BinayRecurtion(arr,target ,start = 0,end = arr.length){
 if(arr.length === 0){
    return -1
 }
    if(start > end){
        return -1
    }
    let middle = Math.floor(start + (end - start )/2);
    if(arr[middle] === target){
        return middle
    }else if (arr[middle] < target){
        start = middle + 1;
    }else{
        end = middle - 1 ;
    }

 return BinayRecurtion(arr,target,start,end)
}

let sortArray = [1,2,3,4,5,6,7,8,9];
console.log(BinayRecurtion(sortArray,79));
console.log(BinayRecurtion(sortArray,9));
console.log(BinayRecurtion(sortArray,7));
console.log(BinayRecurtion(sortArray,0));
console.log(BinayRecurtion(sortArray,4));

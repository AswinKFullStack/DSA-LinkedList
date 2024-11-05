function BinarySearch(array,target){

    let start = 0;
    let end = array.length-1;
    while(start <= end){
        let middle = Math.floor(start + (end - start)/2);
        if(array[middle] === target){
            return middle;
        }else if (target > array[middle]){
            start = middle + 1;
        }else {
            end = middle-1;
        }
    }
    return -1;
}
function LinearSearch(array,target){
    return array.reduce((acc,curr,index)=>{
        acc = curr === target ? index : acc;
        return acc
    },-1)
}
function LinearSearch2(array,target){
  for(let i = 0 ;i < array.length ;i++){
    if(array[i] === target){
        return i;
    }
  }
  return -1;
}
let sortArray = [1,2,3,4,5,6,7,8,9];
let unsortedArray = [3,5,6,8,9,5,7,0]
console.log(BinarySearch(sortArray,2));
console.log(LinearSearch(unsortedArray,5));
console.log(LinearSearch2(unsortedArray,5));

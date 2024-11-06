const sumOfArry = (arr ,index = 0)=>{
    if(index === arr.length){
        return 0;
    }
return arr[index] + sumOfArry(arr,index + 1);
}

let array = [1,2,3,4];
console.log(sumOfArry(array));

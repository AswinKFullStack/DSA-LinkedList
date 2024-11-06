function fibonacci(n , currentPosition = 2 ,first = 0,second = 1){
    if( n<0){
        return null
    }
    if(n<2){
        return n
    }
    let curr =  first + second;
    
    if(currentPosition === n){
        return curr

    }
    return  fibonacci(n,currentPosition + 1,second,curr)
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(8));
console.log(fibonacci(9));
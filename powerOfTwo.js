function isPowerOfTwo(num){
    let powerOFTwo = 1
    while( num >= powerOFTwo ){
        if(powerOFTwo === num){
            return true;
        }else{
            powerOFTwo *= 2;
        }
    }
    return false
}
console.log("is Power of Two " ,isPowerOfTwo(1));
console.log("is Power of Two " ,isPowerOfTwo(2));
console.log("is Power of Two " ,isPowerOfTwo(5));

 function isPrime(num){
    if(num < 1){
        return null
    }
    if(num<2){
        return false;
    }
    for(let i = 2 ; i <= Math.sqrt(num) ; i++){
        if(num%i === 0 ){
            return false
        }
    }
    return true;
 }

 console.log("the Num is Prime 5? =", isPrime(5));
 console.log("the Num is Prime 4? =", isPrime(4));
 
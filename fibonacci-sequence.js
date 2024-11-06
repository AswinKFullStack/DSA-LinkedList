function fib(n){
    if(n<2){
        console.log("give valid number for fibnoci series");
        return null
    }
    let output = [0,1]
    for(i = 2;i<n;i++){
        output[i] = output[i-1] + output[i-2];
    }
    console.log("fibinoci series =", output);
    return output;
}

fib(7);
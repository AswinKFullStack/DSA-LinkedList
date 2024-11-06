function recurtion(num){
    if(num <=1){
        return 1
    }
    return num * recurtion (num-1);
}

console.log(recurtion(5));
let string = "Hello world"
let output = string.split(' ');
for(let i =0 ;i < output.length ;i++){
    output[i] = output[i].split('').reverse().join('');
}
console.log(output.join(' '));

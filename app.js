var output = [];
var count = 1;
function fizzBuzz(){
 if(count % 3 === 0 && count % 5 === 0){
    count++;
    output.push("FizzBuzz");
 }else if(count % 5 === 0){
    count++;
  output.push("Buzz");
 }else if(count % 3 === 0){
    count++;
    output.push("Fizz");
 }else{
    output.push(count);
    count++;
 }
  
 console.log(output);
}
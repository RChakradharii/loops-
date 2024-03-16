/*Take a number N from the user as input, and print even numbers up to N.*/

const input = require("readline-sync")
let n = input.questionInt("enter the value of n:");

for(let i=2;i<=n;i=i+2){
    console.log(i);
}

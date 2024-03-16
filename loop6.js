/*Write a program to calculate the sum of the following series where N is input from the user. 1 + 1/2 + 1/3 + 1/4 + 1/5 +…………1/N*/

const input = require("readline-sync")
let n = input.questionInt(`enter the number:`);
let i=1;
p=1;
sum =0;

while(i<=n){
    sum = sum+(p/i);
    i++
    console.log(sum);
}

/*Write a program to take a number from the user and print the sum of the digits of the given number.*/

const input = require("readline-sync")
let n = input.questionInt(`enter the number:`);
let sum=0;
while(n>0){
    a=n%10
    sum=sum+a
    n=Math.floor(n/10)
}
console.log("sum of digits are :" + sum);

/*Write a program to take two integers M, and N and print the sum of numbers in the range M to N.*/


const input = require("readline-sync")
let n = input.questionInt(`enter the first number:`);
let m = input.questionInt(`enter the second number:`);
let p=0;
   while(n<=m){
    p = p+n
    n++

   }console.log(p);

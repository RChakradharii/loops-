/*Write a program that takes a number from the user and prints the number that is formed by reversing the digits of the number.*/


const input = require("readline-sync")
let a = input.questionInt("enter any number: ")
let i=a;
let p=0;
while(i>0){
    r = i%10
    p = (p*10)+r
    i = Math.floor(i/10)
r
} console.log("reverse of the digits:" + p);


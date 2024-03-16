
/*Write a program to take two numbers from the user as input and obtain the HCF and LCM of the two numbers.*/

const input = require("readline-sync")
let a = input.questionInt("enter the first number: ")
let b = input.questionInt("enter the second number: ")
let p = a*b

while(a%b!=0){r=a%b,a=b,b=r}

console.log(hcm= b,lcf=p/b)


/*Write a program to check if a number is a special type of number called a 'prime number'. A prime number is a number that is 
only divisible by 1 and itself, and it doesn't have any other factors.*/

const input = require("readline-sync")
let a=input.question("enter the number : ");

let i=2;
while (i<a)
{
   if (a%i==0)
   {
       console.log("It is not prime number");
       i++;
       break;
   } else {
       i++;
   }if (i==a){
       console.log("It is prime number");
   }
}

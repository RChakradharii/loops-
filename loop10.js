
/*Write a program to take a number from the user and then determine if that number is a special type of number called a 'perfect number'.*/

const input = require("readline-sync")
let a=input.question("enter the number : ");
let n = Number (a);
let i = 1;
sum = 0;
while(n>i){
    if(n%i==0){
        sum+=i;
    }
    i++;
}
if(sum==n){
    console.log("Yes");
}else{
    console.log("No");
}

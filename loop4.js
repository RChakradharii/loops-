

const input = require("readline-sync")
let m = input.question(`enter the number:`);
let n = input.question(`enter the number:`);
let i=m;
let p=1;

while(i<=n){
    p = p+i
    i++
    console.log(p);
}





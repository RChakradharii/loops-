


/*Write a program to take N numbers from the user and print the frequency of every number.*/

// const input = require('readline-sync');
// let n = input.questionInt("enter the value of n:")
// let count = 1;
// let i = 0;
// let arr = [];


// for (let i = 0; i < n; i++) {
//     let num = input.questionInt(`Enter number ${i + 1}: `);
//     arr.push(num);
// }

// while (i < n) {
//     let j = i + 1;
//     count = 1; 
//     while (j < n) {
//         if (arr[i] === arr[j]) {
//             count++;
//         }
//         j++;
//     }
//     console.log(`Frequency of ${arr[i]}: ${count}`);
//     i++;
// }


////////////////////SAME/////////////////////////////////////


const input = require('readline-sync');

let n = input.questionInt("Enter the value of n: ");
let i = 0;
let arr = [];
let counted = []; 

for (let i = 0; i < n; i++) {
    let num = input.questionInt(`Enter number ${i + 1}: `);
    arr.push(num);
    counted.push(false); 
}

while (i < n) {
    if (!counted[i]) {
        let j = i + 1;
        let count = 1;
        while (j < n) {
            if (arr[i] === arr[j]) {
                count++;
                counted[j] = true; 
            }
            j++;
        }
        console.log(`Frequency of ${arr[i]}: ${count}`);
    }
    i++;
}


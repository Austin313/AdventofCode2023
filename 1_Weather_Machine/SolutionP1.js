/*
    With provided input get the first and last values as a string (sdfs3rewr4dd == 34), and sum them together.
    
*/

//Need fs module to read input file
const fs = require('fs');
//Master Queue to hold smaller queues
var Arr = [];
//sol will resemble final solution
var sol = 0;
//input text and splits into array of strings
input = fs.readFileSync('1_Weather_Machine/input.txt','utf-8').split('\n');

//Start by extracting our numbers from each input line
function extractNum(x){
    y = x.replace(/[^\d-]/g, '');

    if(y.length == 1){
        return y+y;
    }
    first = y.charAt(0);
    last = y.charAt(y.length - 1);
    return first+last;
}

//Now we will save them to an array to add later
function addToArray(){
    for(i=0;i<input.length;i++){
        Arr.push(extractNum(input[i]));
    }
}

//now its time to add all of the array elements together to return our solution!!
function sumTotal(){
    for(i=0;i<Arr.length;i++){
        sol = +sol + +Arr[i];
    }
    console.log(sol);
}

addToArray();
sumTotal();


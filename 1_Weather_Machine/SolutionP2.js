/*
   Just like in Pt 1, we need to get the first and last value as the input but now worded(ie. "one", "two", etc) are needed to be added into the logic.  
*/

//Need fs module to read input file
const fs = require('fs');
//Master Queue to hold smaller queues
var Arr = [];
//sol will resemble final solution
var sol = 0;
//input text and splits into array of strings
input = fs.readFileSync('1_Weather_Machine/input.txt','utf-8').split('\n');

// --- Creating an array to keep method clean for regex.. --

numbers = ["one","two","three","four","five","six","seven","eight","nine","zero"];

//Start by extracting our numbers from each input line
function extractNum(x){
    //To keep it simple, and mostly due to inexperience with regex, I am going to replace any strings that match the numbers, with an an actual value

    //Too lazy to come up with logic to go through the input so just creating cases here.. lol
    x=x.replaceAll("twone", "21" );
	x=x.replaceAll("eightwo", "82" );
	x=x.replaceAll("nineight", "98" );
	x=x.replaceAll("eighthree", "83" );
	x=x.replaceAll("threeight", "38" );
	x=x.replaceAll("fiveight", "58" );
	x=x.replaceAll("nineight", "98" );
	x=x.replaceAll("oneight", "18" );
	x=x.replaceAll("sevenine", "79" );

    //normal operation
    x=x.replaceAll("one","1");
    x=x.replaceAll("two","2");
    x=x.replaceAll("three","3");
    x=x.replaceAll("four","4");
    x=x.replaceAll("five","5");
    x=x.replaceAll("six","6");
    x=x.replaceAll("seven","7");
    x=x.replaceAll("eight","8");
    x=x.replaceAll("nine","9");
    x=x.replaceAll("zero","0");

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


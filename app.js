// As our list is sorted I immpleneted a modified binary search

//Time complexity of Search will be O(L(LogN))

//Time complexity of Insert will be O(L(LogN)) also because we can again use binary search to find the last index of match and then insert at that place

//Space complexity is O(N)
//Where L is the length of seacrh string
//N is the number of strings


const fs = require('fs');

let query = "HELLO"; // input in capital
// Result - Found 'HELLO' at 44145

let query1 = "HELSDA"; // Not in directory
// Result - Closet Result of 'HELSDA' is helsinki at 44184

let query2 = "mountain"; //Found
// Result - Found 'mountain' at 61353

let query3 = "  hills"; //Found
// Result - Closet Result of '  hils' is hilly at 44728


//Loading the list as a array of strings
fs.readFile('list.txt', {
    encoding: 'utf-8',
    flag:'r'
}, (err, data) => {
    if (err) {
        throw err;
    }
    const words = data.toString().split('\r\n'); //Converting in array of strings
    find_word(query, words);
    find_word(query1, words);
    find_word(query2, words);
    find_word(query3, words);
})

function find_word(query , words){
    //Preprocessing query
    let length  = words.length;
    str = query.toLowerCase();//lowercasing the string
    str = str.trim();// triming white spaces from both the ends
    //Using Binary Search
    let mid , start = 0, end = length, flag = false, last_word = "";
    while(start<=end){
        mid = Math.floor((start+end)/2);
        last_word = words[mid];  //storing last word in case we don't found a match
        if(words[mid]===str){
            console.log(`Found '${query}' at ${mid}`); // If we found a Match
            flag = true;
            break;
        }
        if(words[mid]>str){
            end = mid-1;
        }
        else{
            start = mid+1;
        }
    }
    // If not found in list
    if(!flag){   
        console.log(`Closet Result of '${query}' is ${last_word} at ${mid}`); //Displaying similar word
    }
}
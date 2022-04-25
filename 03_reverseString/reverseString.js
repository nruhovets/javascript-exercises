const reverseString = function(string) {

    let finalString = "";

    for(i=string.length -1; i>=0; i--){
        currentChar = string.charAt(i);
        finalString += currentChar;
    }
    return finalString;
};

// Do not edit below this line
module.exports = reverseString;

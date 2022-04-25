const repeatString = function(string, numberOfTimesToRepeat){
    
    let finalString = "";

    if (numberOfTimesToRepeat < 0){
        return "ERROR";
    }
    for(i=0;i<numberOfTimesToRepeat;i++){
        finalString += string;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;

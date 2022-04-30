const sumAll = function(lowRangeInt, highRangeInt) {
    finalSum = 0;

    if (highRangeInt < 0 || lowRangeInt < 0){
        return "ERROR";
    }
    else if (typeof highRangeInt != "number" || typeof lowRangeInt != "number"){
        return "ERROR";
    }
    else if (lowRangeInt <= highRangeInt){
        for (i=lowRangeInt; i<=highRangeInt; i++){
            finalSum += i;
        }
        return finalSum;
    }
    else if (highRangeInt <= lowRangeInt){
        for (i=highRangeInt; i<=lowRangeInt; i++){
            finalSum+= i;
        }
        return finalSum;
    }
    else 
    return "ERROR";
};

console.log(sumAll(1,4));

// Do not edit below this line
module.exports = sumAll;

const removeFromArray = function(array, ...args) {
    
for(i=0;i<array.length; i++){
    for (j=0; j<args.length; j++){
        if(array[i] === args[j]){
            array.splice(i,1)
            i--;
        }
    }
}
return array;
};

// Do not edit below this line
module.exports = removeFromArray;

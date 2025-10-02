//Robert Drynan
//question-1.js

function lowerCaseWords(mixedArray){
    return new Promise((resolve, reject) => {
        //checks if the mixed array is an array rejects if its not
        if(!Array.isArray(mixedArray)){
            reject("The input was not an array, please input an array");
        }
        //filters out non string items and makes everything lower case
        const filtered = mixedArray
            .filter(item => typeof item === "string")
            .map(word => word.toLowerCase());
        resolve(filtered);
    });
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.error(error.message));
//Robert Drynan - question 1

function lowerCaseWords(mixedArray){
    return new Promise((resolve, reject) => {
        if(!Array.isArray(mixedArray)){
            reject("The input was not an array, please input an array");
        }
        const filtered = mixedArray
            .filter(item => typeof item === "string")
            .map(word => word.toLowerCase());
        resolve(filtered);
    });
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
console.log(lowerCaseWords(mixedArray));
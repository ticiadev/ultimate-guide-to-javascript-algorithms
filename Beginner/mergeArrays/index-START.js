/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

function mergeArrays(...arrays) {
    //using set
    /* let joined = []
    arrays.forEach(array => joined = [...joined, ...array])
    return [...new Set([...joined])] */

    //using reduce() and set
    return [...new Set(arrays.reduce((joined,array) => joined.concat(array)))]
    
}


module.exports = mergeArrays
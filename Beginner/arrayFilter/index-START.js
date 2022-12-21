/*
Return the first element from the given array that passes the test specified by the provided function. Both the array and function are passed into the function as arguments as shown below:
arrayFilter(arr, func)
*/

/**
 * @param array
 * @param function
 * @return first element from array that passes the function test
 * @example not given
 * @pseudocode
 * - for loop to test each item
 * - return first item where case passes
 */

function arrayFilter(arr,func){
    //for loop, own code
    /* for(let i=0;i<arr.length;i++){
        if(func(arr[i])) return i
    }
    return undefined */
    //for..of loop, fastest
    for(let elem of arr){
        if(func(elem)) return elem
    }
    return undefined
    //filter(), own code
    // return arr.filter(x => func(x))[0] || undefined
    //filter()
    /* let filtered = arr.filter(func)
    return filtered[0] ? filtered[0] : undefined */
    //find()
    // return arr.find(func)
}
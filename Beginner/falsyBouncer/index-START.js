/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/


function falsyBouncer(array) {
    // for loop, slightly slower than own filter() code
    /* let newArray = []
    for(let item of array){
        if(item) newArray.push(item)
    }
    return newArray */

    //filter(), own code, fastest
    return array.filter(x => x)

    //filter(), slowest
    // return array.filter(x => Boolean(x))

}


module.exports = falsyBouncer
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

    //using reduce() and set, own addition
    // return [...new Set(arrays.reduce((joined,array) => joined.concat(array)))]

    //using filter(), fastest
    /* let joined = []
    arrays.forEach(array => joined = [...joined,...array])
    return joined.filter((x,i) => joined.indexOf(x) === i) */

    //using reduce() and filter(), own addition
    // return arrays.reduce((joined,array) => joined.concat(array)).filter((x,i,a) => a.indexOf(x) === i)

    //using reduce()
    /* let jointArray = []

    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    })
    const uniqueArray = jointArray.reduce((newArray, item) =>{
        if (newArray.includes(item)){
            return newArray
        } else {
            return [...newArray, item]
        }
    }, [])
    return uniqueArray */

    //rewrite reduce()
    return arrays.reduce((joined,array) => joined.concat(array))
                 .reduce((newArray,item) => {return newArray.includes(item) ? newArray : [...newArray,item]},[])
}


module.exports = mergeArrays
/* 
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

function chunkArray(array, size) {
    // loop through, my code
    /* let subs = []
    let sub = []
    for(let i=0;i<array.length;i++){
        if(sub.length === size){
            subs.push(sub)
            sub = []
            sub.push(array[i])
        }else if(i === array.length-1){
          sub.push(array[i])
          subs.push(sub)
        }else{
            sub.push(array[i])
        }
    }
    return subs */
    //loop through, given code
    /* function chunkArray(array, size) {
        let result = []
        for (value of array){
            let lastArray = result[result.length -1 ]
            if(!lastArray || lastArray.length == size){
                result.push([value])
            } else{
                lastArray.push(value)
            }
        }
        return result
    } */
    //splice
    /* function chunkArray(array, size) {
        let result = []
        let arrayCopy = [...array]
        while (arrayCopy.length > 0) {
            result.push(arrayCopy.splice(0, size))
        }
        return result
    } */
    //slice
    let subs = []
    for(let i=0;i<array.length;i+=size){
        subs.push(array.slice(i,size+1))
    }
    return subs
    //recursion
    /* function chunkArray(array, size) {
        if(array.length <= size){
            return [array]
        }
        return [array.slice(0,size), ...chunkArray(array.slice(size), size)]
     } */
}


module.exports = chunkArray
/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/




function hammingDistance(stringA, stringB) {
    // for loop, significantly faster
    let count = 0
    for(let i=0;i<stringA.length;i++){
        if(stringA.toLowerCase()[i] !== stringB.toLowerCase()[i]) count++
    }
    return stringA.length === stringB.length && count
    //filter() method
    // return stringA.split("").filter((x,i) => stringB.split("")[i] !== x).length
    //given weird for loop syntax, doesn't work
    /* let result = 0

    if (stringA.length == stringB.length) {

        for (let i = 0; i < stringA.length; i++) {
            if (stringA++[++i].toLowerCase() != stringB++[++i].toLowerCase()) {
                result++
            }
        }

        return result

    } else {
        throw new Error('Strings do not have equal length')
    } */
}



module.exports = hammingDistance
/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/



function isAnagram(stringA, stringB) {
    // direct comparison
    /* stringA = stringA.toLowerCase().split("").sort().join("")
    stringB = stringB.toLowerCase().split("").sort().join("")
    return stringA == stringB */

    //character map, faster
    let chars = {}
    for(let char of stringA){
        chars[char] ? chars[char]++ : chars[char] = 1
    }
    for(let char of stringB){
        if(chars[char]){
            chars[char]++
        }else{
            return false
        }
    }
    return true
}


module.exports = isAnagram
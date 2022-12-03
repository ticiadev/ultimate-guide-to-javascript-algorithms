/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/



function maxRecurringChar(text) {
    //iterative
    let count = {}
    let maxChar = ""
    let maxVal = 0
    for(char of text){
        count[char] ? count[char]++ : count[char] = 1
    }
    for(char in count){
        if(count[char] > maxVal){
            maxVal = count[char]
            maxChar = char
        }
    }
    return maxChar

    //create array
    /* let count = {}
    let charArr = []
    let valArr = []
    let maxVal = 0

    for(char of text){
        count[char] ? count[char]++ : count[char] = 1
    }

    charArr = Object.keys(count)
    valArr = Object.values(count)
    maxVal = Math.max(...valArr)

    return charArr[valArr.indexOf(maxVal)] */

}



module.exports = maxRecurringChar;
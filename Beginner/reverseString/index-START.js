/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function reverseString(text) {
    /* // built-in methods
    return text.split("").reverse().join("") */

    /* //for loop
    let rev = ""
    for(char of text){
        rev = char + rev
    }
    return rev */

    //recursion
    return text === "" ? "" : reverseString(text.substr(1)) + text[0]

    /* //reduce()
    return text.split("").reduce((str,char) => char + str, "") */

    /* //own solution: array to reverse
    text = text.split("")
    for(let i=0;i<text.length/2;i++){
        let hold = text[i]
        text[i] = text[text.length-1-i]
        text[text.length-1-i] = hold
    }
    return text.join("") */
}



module.exports = reverseString
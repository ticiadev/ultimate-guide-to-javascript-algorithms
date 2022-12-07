/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/




function palindromeChecker(text) {
    //intuitive, slowest
    // return text.split("").reverse().join("") === text
    //compare and loop
    // return text.toLowerCase().split("").every((c,i,a) => c === a[a.length - i - 1])
    //compare and loop, optimized, fastest
    for(let i=0;i<text.length/2;i++){
        if(text[i] !== text[text.length - 1 - i]){
            return false
        }
    }
    return true
}



module.exports = palindromeChecker;
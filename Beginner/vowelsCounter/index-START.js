/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


function vowelsCounter(text) {
    // iterative
    /* const vowels = "aeiou"
    let count = 0
    for(let i=0;i<text.length;i++){
        if(vowels.includes(text[i].toLowerCase())){
            count++
        }
    }
    return count */
    
    //regex
    /* let vowels = text.match(/[aeiou]/gi)
    return vowels ? vowels.length : 0 */
}



module.exports = vowelsCounter;

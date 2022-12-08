/* CHALLENGE
Given a sentence, return the longest word in the string. E.g 'Top Shelf Web Development Training on Scotch' should return 'Development'
*/



function longestWord(text) {
    // for loop, similar time to reduce()
    let longest = ""
    for(let word of text.split(" ")){
        longest = word.length > longest.length ? word : longest
    }
    return longest

    //reduce(), similar time to for loop
    // return text.split(" ").reduce((longest,curr) => {return curr.length > longest.length ? curr : longest},"")

    //sort(), slowest
    // return text.split(" ").sort((a,b) => b.length - a.length)[0]

}


module.exports = longestWord
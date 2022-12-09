/* CHALLENGE
    Receiving a sentence, a word in the sentence and a replacement for that word as arguments, perform a search and replace on the sentence using the arguments provided and return the new sentence.
*/

function searchReplace(str, word, newWord){
    //replace() method, fastest
    if(word[0] === word[0].toUpperCase()){
        newWord = newWord[0].toUpperCase() + newWord.slice(1)
    }
    return str.replace(word,newWord)
    //use regex
    /* let regex = new RegExp(word, "gi");
    if (/[A-Z]/.test(word[0])) {
        newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1);
    }
    return str.replace(regex, newWord) */


}
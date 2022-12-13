/*
ranslate the provided string to Pig Latin by following the rules below:

For words that begin with consonant sounds, the consonant before the initial vowel should be moved to the end of the word sequence and "ay" affixed. E.g
"pig" = "igpay"
For words that begin with consonant clusters, the clusters should be moved to the end of the word sequence and "ay" affixed. E.g
"glove" = "oveglay"
For words that begin with vowel sounds, simply add "way" to the end of the word. E.g
"explain" = "explainway”
*/

function pigLatin(str){
    //imperative
    const vowels = "aeiou"
    let vowelIdx = 0
    if(vowels.includes(str[0])){
        return str + "way"
    }else {
        for(char of str){
            if(vowels.includes(char)){
                vowelIdx = str.indexOf(char)
                break
            }
        }
        return str.slice(vowelIdx) + str.slice(0,vowelIdx) + "ay"
    }
    //declarative, slower
    /* return str
    .replace(/^([aeiouy])(._)/, '$1$2way')
    .replace(/^(_[_^aeiouy]+)(._)/, '$2$1ay') */
}

console.log(pigLatin("shrimp"))
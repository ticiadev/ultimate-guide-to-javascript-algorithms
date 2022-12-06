/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/




function capSentence(text) {
   // forEach() method
   /* let arr = []
   text.toLowerCase().split(" ").forEach(w => arr.push(w[0].toUpperCase() + w.slice(1)))
   return arr.join(" ") */
   //map() method, fastest
   return text.toLowerCase().split(" ").map(w => w[0].toUpperCase() + w.slice(1)).join(" ")
  //replace() method, slowest
  // return text.toLowerCase().split(" ").map(w => w.replace(w[0], w[0].toUpperCase())).join(" ")
}



module.exports = capSentence
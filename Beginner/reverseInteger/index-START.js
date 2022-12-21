/*
Given an integer, return an integer that has the reverse ordering of that which was received. E.g

reverseInteger(-123) // should return -321

The signs must not change i.e -123 becomes -321
The value returned must be an integer.
All insignificant zeroes must be removed i.e 900 becomes 9 and not 009
*/

/**
 * @param integer
 * @return integer, reversed; negative sign in same place; remove leading zeroes
 * @example
 * - reverseInteger(-123) => -321
 * - reverseInteger(900) => 9
 * @pseudocode
 * - converst integer into string
 * - split integer into array
 * - filter for negative sign
 * -- if negative sign, store in placeholder variable
 * - reverse array
 * - remove leading zeroes by converting string to number
 */

function reverseInteger(int){
    //first try, slightly faster than Math.sign()
    /* let negative = false
    let arr = String(int).split("")
    if(arr[0] === "-"){
        negative = true
        arr.shift()
    }
    let intRev = +arr.reverse().join("")
    if(negative){
        intRev = -intRev
    }
    return intRev */
    //use Math.sign() to check of negative, slowest
    /* let arr = String(int).split("")
    arr[0] === "-" && arr.shift()
    let intRev = +arr.reverse().join("")
    return intRev * Math.sign(int) */
    //using reduce(), fastest
    const reverseString = text => [...text].reduce((acc,c) => c + acc, "")
    let reversed = parseInt(reverseString(String(int)))
    return reversed * Math.sign(int)
}
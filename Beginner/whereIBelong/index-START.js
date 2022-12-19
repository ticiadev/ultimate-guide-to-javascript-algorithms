/*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/



function whereIBelong(arr, num) {
   // for loop, find first larger number, slightly slower than while loop
   /* if(arr.length === 0) return 0
   // arr = arr.sort((a,b) => a-b)
   for(let i=0;i<arr.length;i++){
      if(arr[i] >= num) return i
   } */
   //for loop, get number of smaller values (fastest according to scotch.io, but not unit tests)
   /* let counter = 0
   for(let i=0;i<arr.length;i++){
      if(num > arr[i]) counter++
   }
   return counter */
   //while loop, fastest
   let counter = 0
   while(num > arr[counter]){
      counter++
   }
   return counter
   //find index directly, slowest
   /* arr.push(num)
   arr.sort((a,b) => a-b)
   return arr.indexOf(num) */
}



module.exports = whereIBelong
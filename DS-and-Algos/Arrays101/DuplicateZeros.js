// Duplicate Zeros

// Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written.

// Do the above modifications to the input array in place, do not return anything from your function.

// Example 1:

// Input: [
// Output: null
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
// Example 2:

// Input: [1,2,3]
// Output: null
// Explanation: After calling your function, the input array is modified to: [1,2,3]
 
// create a var for 0;
//
const duplicateZeros = (arr) => {
    let zero = 0;
    arr.forEach(element => {
        if(element === 0){
            zero++
        }
        console.log(zero);
    });
}

var testInputArray = [1,0,2,3,0,4,5,0];
duplicateZeros(testInputArray);
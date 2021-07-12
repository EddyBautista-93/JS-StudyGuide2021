//  Given an integer array nums sorted in non-decreasing
//  order, return an array of the squares of each number 
//  sorted in non-decreasing order.

// Example:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]


const squareSortedArray = (nums) => {
    // add a new method to sort the array numerically
    var sortedArray = nums.sort((a, b) => a - b);

    // .map creates a new array with the results of calling the given function on every element of this array.
    var squares = sortedArray.map(x => x * x);
    return squares.sort((a, b) => a - b);
};

squareSortedArray([-4,-1,0,3,10]);

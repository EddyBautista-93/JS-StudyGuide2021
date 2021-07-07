// Given a binary array nums, return the maximum number of consecutive 1's in the array.



// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2

const findMaxConsecutiveOnes = (nums) => {
    // initialize count & result
    let count = 0;
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        // reset counter when 0 is found
        if (nums[i] === 0) {
            count = 0;
        // When 1 is found, increment count and update results
        } else {
            count++
            result = Math.max(result, count)
        }
    }
    return result;
}


findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]);
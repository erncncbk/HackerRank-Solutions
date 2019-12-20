/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
function getSecondLargest(nums) {
    // Complete the function
    let bigNum = Math.max.apply(null, nums);
    var secondBigNum = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== bigNum) {
            if (nums[i] > secondBigNum) {
                secondBigNum = nums[i];
            } else if (i = nums.length - 1) {
                if (nums[i] > secondBigNum) {
                    secondBigNum = nums[i]
                }
            }
        }
    }
    return secondBigNum;
}
console.log(getSecondLargest([2, 3, 6, 6, 5])); //Output should be 5
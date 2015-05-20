/*
 * Sometimes you need a helper function to store state
 * while doing recursion. I've started this problem with an
 * example of a helper function. A more in depth discussion on
 * recursion and helpers, here:
 *
 * https://www.cs.umd.edu/class/fall2002/cmsc214/Tutorial/recursion2.html
 */

function min_helper(nums, currVal) {
  var retVal;

  console.log(nums, currVal);

  if (!nums.length) retVal = currVal;

  else if (currVal <= nums[0]) {
    //console.log("CV " + currVal + " less than " + nums[0]);
    retVal = min_helper(nums.slice(1), currVal);
  }
  else if (currVal > nums[0]) {
    currVal = nums[0];
    //console.log("CV was more than new CV: " + currVal);
    retVal = min_helper(nums.slice(1), currVal);
  }

  return retVal;
}

function min(nums) {
    console.log('STARTING', nums);
    if(!nums || nums.constructor !== Array) throw new Error("Argument exception");

    //take elements 1->end of the array and pass it
    //the first value in the array as the minimum
    return min_helper(nums, nums.splice(0, 1)[0]);
}

module.exports = min;

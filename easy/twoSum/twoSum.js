/*Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

Return the answer with the smaller index first. */

class Solution {
	/**
	 * @param {number[]} nums
	 * @param {number} target
	 * @return {number[]}
	 */
	twoSum(nums, target) {
	}
}

const test = new Solution();

console.log(test.twoSum([3, 4, 5, 6], 7)); // [0, 1]
console.log(test.twoSum([4, 5, 6], 10)); // [0, 2]

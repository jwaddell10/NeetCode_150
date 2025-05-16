class Solution {
	/**
	 * @param {number[]} nums
	 * @param {number} target
	 * @return {number[]}
	 */
	findPair(nums, target) {
		let pairMap = new Map();

		for (let i = 0; i < nums.length; i++) {
			const diff = target - nums[i];
			if (pairMap.has(diff)) {
				return [diff, nums[i]];
			}
			pairMap.set(nums[i], i);
		}
		return null;
	}
}

// { 2: 0, 5: 1, }

const test = new Solution();
// Given a list of numbers,
// find two numbers in the list that add up to ten
// and return them. If no such pair exists, return null.

// It is guaranteed that there is either exactly one pair of numbers
// that satisfies the condition, or no pairs at all.

// Test Cases:

console.log(test.findPair([2, 3, 9, 7], 10)); // Output: [3, 7]
console.log(test.findPair([10, 6, -1, 2], 10)); // null
console.log(test.findPair([1, 2, 5, 6], 10)); // null
console.log(test.findPair([1, 3, 6, 10, 4, 5], 10)); // [6, 4]
console.log(test.findPair([4, -5, 3, 15, 5], 10)); // [-5, 15]

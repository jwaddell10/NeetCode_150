//brute force, sorting method, hash set method

class Solution {
	hasDuplicate(nums) {
		const seen = new Map();

		for (let i = 0; i < nums.length; i++) {
			if (seen.has(nums[i])) {
				return true;
			}
			seen.set(nums[i], i);
		}
		return false;
	}
}

const test = new Solution();

console.log(test.hasDuplicate([1, 2, 3, 3])); //true
console.log(test.hasDuplicate([1, 2, 3, 4])); //false
console.log(test.hasDuplicate([1, 2, 3, 4, 5, 1, 23, 5])); // true
console.log(test.hasDuplicate([1, 2, 3, 4, 99, 0, -1, 5])); //false

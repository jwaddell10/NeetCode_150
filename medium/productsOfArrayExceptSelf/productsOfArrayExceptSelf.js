class Solution {
	/**
	 * @param {number[]} nums
	 * @return {number[]}
	 */
	productExceptSelf(nums) {
        const n = nums.length;
        const res = new Array(n).fill(1);
        for (let i = 1; i < n; i++) {
            res[i] = res[i - 1] * nums[i - 1];
        }
        console.log(res)
	}
}

const test = new Solution();

console.log(test.productExceptSelf([1, 2, 4, 6])); // [48,24,12,8]

// Input: nums = [1,2,4,6]

// Output: [48,24,12,8]

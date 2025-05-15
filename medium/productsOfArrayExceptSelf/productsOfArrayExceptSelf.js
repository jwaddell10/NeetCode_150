class Solution {
	/**
	 * @param {number[]} nums
	 * @return {number[]}
	 */
	productExceptSelf(nums) {
        const n = nums.length;
        const res = new Array(n);

        for (let i = 0; i < nums.length; i++) {
            let prod = 1;
            for (let j = 0; j < n; j++) {
                if (i !== j) {
                    prod *= nums[j]
                }
            }
            res[i] = prod;
        }
        return res;
	}
}

const test = new Solution();

console.log(test.productExceptSelf([1, 2, 4, 6])); // [48,24,12,8]

// Input: nums = [1,2,4,6]

// Output: [48,24,12,8]

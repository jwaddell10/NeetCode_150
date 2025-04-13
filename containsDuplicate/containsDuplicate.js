// class Solution {
//     /**
//      * @param {number[]} nums
//      * @return {boolean}
//      */
//     hasDuplicate(nums) {
//         for (let i = 0; i < nums.length; i++) {
//             for (let j = i + 1; j < nums.length; j++) {
//                 if (nums[i] === nums[j]) {
//                     return true;
//                 }
//             }
//         }
//         return false;
//     }
// }

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        nums.sort((a, b) => a - b);
        for (let i = 1; i < nums.length; i++) {
            console.log(nums[i], nums[i - 1])
            if (nums[i] === nums[i - 1]) {
                return true;
            }
        }
        return false;
    }
}

class Solution {
    hasDuplicate(nums) {
        const seen = new Set()

        for (const num of nums) {
            if (seen.has(num)) {
                return true;
            }
            seen.add(num);
        }

        return false;
    }
}

const test = new Solution()

console.log(test.hasDuplicate([1,2,3,3]))
console.log(test.hasDuplicate([1,2,3,4]))
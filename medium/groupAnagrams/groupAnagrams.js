/* Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different. */

//can do it sorted, or hashmaps
class Solution {
	/**
	 * @param {string[]} strs
	 * @return {string[][]}
	 */
	groupAnagrams(strs) {
		const anagramMap = {};
	}
}

const test = new Solution();

console.log(test.groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"])); //[["hat"],["act", "cat"],["stop", "pots", "tops"]]
console.log(test.groupAnagrams(["x"])); // [["x"]]
console.log(test.groupAnagrams([""])); // [[""]]

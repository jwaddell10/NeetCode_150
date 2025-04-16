/* Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.*/

//sort method
class Solution {
	/**
	 * @param {string} s
	 * @param {string} t
	 * @return {boolean}
	 */
	isAnagram(s, t) {
	}
}

//hash map method

const test = new Solution();

console.log(test.isAnagram("racecar", "carrace")); //true
console.log(test.isAnagram("jar", "jam")); //false
console.log(test.isAnagram("rattata", "attarta")); //true
console.log(test.isAnagram("qwertyuiop", "poiuytrewf")); //false

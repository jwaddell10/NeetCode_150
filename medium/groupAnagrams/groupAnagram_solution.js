class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagramMap = {};
        for (let string of strs) {
            const sortedS = string.split('').sort().join('');
            if (!anagramMap[sortedS]) {
                anagramMap[sortedS] = [];
            }
            anagramMap[sortedS].push(string);
        }
        return Object.values(anagramMap);
    }

    groupAnagrams(strs) {
        const res = {};
        for (let s of strs) {
            const count = new Array(26).fill(0);
            for (let c of s) {
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            const key = count.join(',');
            if (!res[key]) {
                res[key] = [];
            }
            res[key].push(s);
        }
        return Object.values(res);
    }
}
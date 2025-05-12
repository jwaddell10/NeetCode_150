class Solution {
	encode(strs) {
	}

	decode(str) {
	}
}

const test = new Solution();

console.log(test.encode(["neet", "code", "love", "you"])) // 4#neet4#code4#love3#you
console.log(test.encode(["lol", "test", "hi", "bobby"])) // 3#lol4#test2#hi5#bobby
console.log(test.decode(test.encode(["neet", "code", "love", "you"]))) //[ 'neet', 'code', 'love', 'you' ]
console.log(test.decode(test.encode(["lol", "test", "hi", "bobby"]))) //["lol", "test", "hi", "bobby"]
// console.log(test.encode(["we","say",":","yes"])) // 2#we3#say1#:3#yes
// console.log(test.decode(test.encode(["we","say",":","yes"]))) // [ 'we', 'say', ':', 'yes' ]

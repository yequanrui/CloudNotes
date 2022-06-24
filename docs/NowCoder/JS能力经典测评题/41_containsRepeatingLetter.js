function containsRepeatingLetter(str) {
	/**
		问题描述：给定字符串 str，检查其是否包含连续重复的字母（a-zA-Z），包含返回 true，否则返回 false

		解题思路：
			第一反应是可以用正则表达式，但是不知道怎么用。
			应该是用正则表达式的反向引用，就是每一个括起来的正则项会被按顺序标记分组，然后每一个\number相当于引用这个括起来的部分。
	
	**/
	return /([A-z])\1/.test(str);
	

}

console.log(containsRepeatingLetter('rattler'))
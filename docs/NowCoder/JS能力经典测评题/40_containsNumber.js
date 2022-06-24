function containsNumber(str) {
	/**
		问题描述：
			给定字符串 str，检查其是否包含数字，包含返回 true，否则返回 false
		思路：
			可以用正则表达式
	**/
	var reg = /\d/;
	return reg.test(str);

}

console.log(containsNumber('abc123'))
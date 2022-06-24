function captureThreeNumbers(str) {
	/**
		题目描述：
				给定字符串 str，检查其是否包含 连续3个数字 
				1、如果包含，返回最新出现的 3 个数字的字符串
				2、如果不包含，返回 false
			--注意是连续三个数字不是三个连续的数字。。。。。

	**/
		var result = /\d{3}/.exec(str);
		if (result) {
			return result[0];
		}
		else
			return false;
}

console.log(captureThreeNumbers('15,gfgf52'))
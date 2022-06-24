function convertToBinary(num) {
	/**
		问题描述：
			将给定数字转换成二进制字符串。如果字符串长度不足 8 位，则在前面补 0 到满8位。
		解题思路：
			可以直接用if 也可以用slice
	**/

	var result = num.toString(2);
	if(result.length === 8)
		return result;
	else{
		
		for (var i = result.length; i < 8 ; i++) {
			result = '0' + result;
		}
		return result;
	}

}
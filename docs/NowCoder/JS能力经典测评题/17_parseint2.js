function parse2Int(num) {
	/**
		题目描述：修改 js 代码中 parseInt 的调用方式，使之通过全部测试用例

		解题思路：只返回最前边的数字。

	**/
	var regex = /\d+/;
	console.log(regex.exec(num))
	num = regex.exec(num)[0];
    return parseInt(num);
}

console.log(parse2Int('155x123'))
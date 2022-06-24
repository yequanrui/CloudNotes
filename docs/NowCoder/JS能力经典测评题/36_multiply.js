function multiply(a, b) {
	/**
		问题描述：
			求 a 和 b 相乘的值，a 和 b 可能是小数，需要注意结果的精度问题 

		解题思路：
			3*0.0001直接乘会得到0.00030000000000000003，有误差，手动保留小数即可
	**/
	var stra = a.toString();
	var strb = b.toString();
	var length = (stra.split('.')[1]||'').length +  (strb.split('.')[1]||'').length;
	return parseFloat((a*b).toFixed(length))
}

console.log(multiply(3, 0.0001))
function valueAtBit(num, bit) {
		/**
		问题描述：
		获取数字 num 二进制形式第 bit 位的值。注意：
			1、bit 从 1 开始
			2、返回 0 或 1
			3、举例：2 的二进制为 10，第 1 位为 0，第 2 位为 1
		解题思路：
			可以直接移位，也可以使用tostring进行操作
		**/
		return (num >> (bit - 1))%2;

}

console.log(valueAtBit(128, 8))
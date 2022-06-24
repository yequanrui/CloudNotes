function useArguments() {
	/**
		问题描述：函数 useArguments 可以接收 1 个及以上的参数。请实现函数 useArguments，返回所有调用参数相加后的结果。本题的测试参数全部为 Number 类型，不需考虑参数转换。
	
		解题思路：可以用循环，也可以用array的slice，将参数作为this传入，可以直接获得数组
	**/
	var args = arguments;
	var ret = 0;
	for (var index in args){
		ret += args[index];
	}
	return ret;
}

console.log(useArguments(1,2,3,4));
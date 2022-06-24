function sum(arr) {
	/**
		题目描述：计算给定数组 arr 中所有元素的总和
		输出描述：数组中的元素均为 Number 类型

		解题思路：直接调用（考虑浏览器兼容，需要判断是否存在此方法） ----不支持箭头函数 用function才行
	**/
	if (arr.length > 0)
		return  arr.reduce((prev, curr) => {
		return prev + curr;
	});
	return 0;
}
console.log(sum([]))
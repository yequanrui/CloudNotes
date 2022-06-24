function prepend(arr, item) {
	/**
		题目描述：在数组 arr 开头添加元素 item。不要直接修改数组 arr，结果返回新的数组

		解题思路：直接使用concat函数 
		---看到评论区有一种是用了push.apply 相当于是Array.prototype.push.apply
	**/

	return [item].concat(arr);

}

console.log(prepend([1,2,3,4],10))
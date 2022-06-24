function append(arr, item) {
	/**
		题目描述：在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数组

		解题思路：可以直接用concat传递空参数 也可以用slice切出所有元素
	**/
	return arr.concat(item);
}
console.log(append([1,2,3,4,5],6))
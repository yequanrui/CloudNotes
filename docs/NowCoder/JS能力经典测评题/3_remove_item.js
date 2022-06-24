function remove(arr, item) {
	/**
		题目描述：移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组

		解题思路：一次循环
	**/
	var result = [];
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] != item)
			result.push(arr[i]);
	}
	return result
}
console.log(remove([1,2,5,56,5,6,33,5], 5))
function insert(arr, item, index) {
	/**
		题目描述：在数组 arr 的 index 处添加元素 item。不要直接修改数组 arr，结果返回新的数组

		解题思路：slice和splice
	**/
	var s = arr.slice();
	s.splice(index, 0, item)
	
	return s;

}


console.log(insert([1, 2, 3, 4], 'z', 2))
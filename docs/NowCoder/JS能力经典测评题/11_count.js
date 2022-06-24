function count(arr, item) {
	/**
		题目描述：统计数组 arr 中值等于 item 的元素出现的次数

		解题思路：slice和splice
	**/
	var c = 0;
	arr.map(function(a){
		if (a === item) {
			++c;
		}
	})
	
	return c;

}


console.log(count([1, 2, 4, 4, 3, 4, 3], 4))
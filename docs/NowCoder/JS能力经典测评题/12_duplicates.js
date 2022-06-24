function duplicates(arr) {
	/**
		题目描述：找出数组 arr 中重复出现过的元素

		解题思路：sort之后遍历 -----没有说输出格式 应该用默认的sort 但是如果按数字大小从小到大输出应该写比较函数
	**/
	arr.sort(function(a, b){
		return a > b
	})

	var rs = [];
	for (var i = 0; i < arr.length - 1; ++i)
	{
		if(arr[i] === arr[i+1])
			if(rs.indexOf(arr[i]) === -1)
				rs.push(arr[i])

	}

	return rs;


}

console.log(duplicates([1, 1, 2, 4, 4, 3, 3, 5, 3]))
function concat(arr1, arr2) {
	/**
		题目描述：合并数组 arr1 和数组 arr2。不要直接修改数组 arr，结果返回新的数组

		解题思路：使用slice获得一个新数组，然后push。 for in中得到的a是下标
	**/
	var arr = arr1.slice();
	for (var a in arr2){
		arr.push(arr2[a]);
	}
	return arr;

}


console.log(concat([1, 2, 3, 4], ['a', 'b', 'c', 1]))
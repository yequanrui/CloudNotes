function findAllOccurrences(arr, target) {
	/**
		题目描述：在数组 arr 中，查找值与 item 相等的元素出现的所有位置

		解题思路：reduce
	**/
	return arr.reduce(function(prev, curr, index){
		if (curr === target) {
			prev.push(index)
		}
		return prev
	}, [])

}
console.log(findAllOccurrences('abcabca', 'a'))
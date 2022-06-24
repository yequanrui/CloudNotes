function truncate(arr) {
	/**
		题目描述：删除数组 arr 最后一个元素。不要直接修改数组 arr，结果返回新的数组

		解题思路：直接使用slice函数
	**/
    return arr.slice(0, arr.length - 1)

}
console.log(truncate([1,2,3,4,5,6]))
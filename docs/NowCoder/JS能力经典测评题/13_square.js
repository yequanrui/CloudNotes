function square(arr) {
	/**
		题目描述：为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组

		解题思路：map
	**/
	return arr.map(function(a){
		return a*a;
	})
}

var a = [1,2,3,4,5]
console.log(square(a))
console.log(a)
function removeWithoutCopy(arr, item) {
	/**
		题目描述：移除数组 arr 中的所有值与 item 相等的元素，直接在给定的 arr 数组上进行操作，并将结果返回

		解题思路：splice函数
		---
		如果不用splice函数，可以用循环队列的思想，看成一个队列，然后使用shift和push（评论区看到的）
	**/
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === item) {
			arr.splice(i, 1);
			--i;
		}
	}
	return arr;
}

console.log(removeWithoutCopy([1,2,3,5,5,5,5,6,7],5))
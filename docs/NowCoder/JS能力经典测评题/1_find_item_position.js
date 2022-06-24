function indexOf(arr, item){
	/**
		题目描述：找出元素 item 在给定数组 arr 中的位置
		输出描述：如果数组中存在 item，则返回元素在数组中的位置，否则返回 -1

		解题思路：直接调用（考虑浏览器兼容，需要判断是否存在此方法） ----牛客网自带的调试工具貌似不支持es6
	**/
	if(arr.indexOf)
		return arr.indexOf(item);
	else{
		for (var i = arr.length - 1; i >= 0; i--) {
			if (arr[i] === item)
				return i;
		}
	}
	return -1;
}

console.log(indexOf([1,2,3,4],'sas'))
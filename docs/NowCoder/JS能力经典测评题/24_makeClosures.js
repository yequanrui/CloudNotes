function makeClosures(arr, fn) {
	/**
    	问题描述：实现函数 makeClosures，调用之后满足如下条件：
			1、返回一个函数数组 result，长度与 arr 相同
			2、运行 result 中第 i 个函数，即 result[i]()，结果与 fn(arr[i]) 相同

		思路： 使用map或者foreach或者for
	**/

	/**
	map版本：
	return arr.map(function(a){
		return function(){
			return fn(a)
		}
	})
	**/

	// 错误的for：闭包内部不要引用任何发生会动态变化的量。下边返回的函数中，依然是将i传到了返回函数的内部。
	/**
	result = [];
	for(var i = 0; i < arr.length; ++i){
		result.push(function(){
			// i在这个for循环内是始终存在的，因此如果直接返回fn(arr[i])会全输出NAN因为循环结束后，i=3
			return (function(n){
				return fn(arr[n])
			})(i)
		})
	}

	return result
	**/

	// for版本：
	result = [];
	for(var i =0; i < arr.length; ++i){
		// 把动态发生变化的量写在形参里
		result.push(function(n){
			return function(){
				return fn(arr[n])
			}
		}(i))
	}

	return result;

}

result = makeClosures([1, 2, 3], function (x) { 
	return x * x; 
})

console.log(result.map((f) => {
	console.log(f())
}))
function partialUsingArguments(fn) {
	/**
		问题描述：实现函数 partialUsingArguments，调用之后满足如下条件：
			1、返回一个函数 result
			2、调用 result 之后，返回的结果与调用函数 fn 的结果一致
			3、fn 的调用参数为 partialUsingArguments 的第一个参数之后的全部参数以及 result 的调用参数
	
	**/
	var args1 = Array.prototype.slice.call(arguments, 1); //参数1数组
	return function result(){
		var args2 = Array.prototype.slice.call(arguments); //参数2数组
		return fn.apply(null, args1.concat(args2));
	}


}
function print()
{
	console.log(arguments);
}

partialUsingArguments(print, 1, 2)(3,4,5)
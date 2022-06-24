greeting = 'sb'
function argsAsArray(fn, arr) {
    /**
    	问题描述：将数组 arr 中的元素作为调用函数 fn 的参数

    	解题思路：apply或者call 第一个参数是this指针，如果赋值为null的时候会自动指向global，因此其实这样子写还是会输出一个sb,ellie....
    **/
    return fn.apply(null, arr)

}

console.log(argsAsArray(function (greeting, name, punctuation) 
	{return this.greeting + ', ' + name + (punctuation || '!');}
	, ['Hello', 'Ellie', '!']))
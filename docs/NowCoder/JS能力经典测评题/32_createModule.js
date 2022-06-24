function createModule(str1, str2) {
	/**
		问题描述：
		完成函数 createModule，调用之后满足如下要求：
		1、返回一个对象
		2、对象的 greeting 属性值等于 str1， name 属性值等于 str2
		3、对象存在一个 sayIt 方法，该方法返回的字符串为 greeting属性值 + ', ' + name属性值
	**/

	var module = new Object();
	module.greeting = str1;
	module.name = str2;
	module.sayIt = function()
	{
		return module.greeting + ', ' + module.name;
	}
	return module;

}

console.log(createModule('1152','5555').sayIt())
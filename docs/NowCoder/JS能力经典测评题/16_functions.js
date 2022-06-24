function functions(flag) {
	/**
		题目描述：请修复给定的 js 代码中，函数定义存在的问题

		解题思路：ES6之前js没有块级作用域，只有全局和函数作用域，因此在ES6之前这段代码相当于是定义了两个同名函数，于是始终返回b
		ES6之后，由于块级作用域，两个定义不冲突。
	**/
    if (flag) {
      function getValue() { return 'a'; }
    } else {
      function getValue() { return 'b'; }
    }

    return getValue();
}

console.log(functions(false))
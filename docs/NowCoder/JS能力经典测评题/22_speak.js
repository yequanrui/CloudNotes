function speak(fn, obj) {
	/**
    	问题描述：将函数 fn 的执行上下文改为 obj 对象

    	解题思路：使用call或者apply，由于用例没有参数，所以第二个参数无所谓的
    **/
    return fn.apply(obj)
}

function alterContext(fn, obj) {
	/**
		问题描述：
			将函数 fn 的执行上下文改为 obj，返回 fn 执行后的值
	**/
	return fn.call(obj);
}

console.log(alterContext(function() {return this.greeting + ', ' + this.name + '!'; }, {name: 'Rebecca', greeting: 'Yo' }))
function matchesPattern(str) {
	/**
		题目描述：
			给定字符串 str，检查其是否符合如下格式
				1、XXX-XXX-XXXX
				2、其中 X 为 Number 类型

		---注意考虑开头结尾有值的情况
	**/
		return /^\d{3}-\d{3}-\d{4}$/.test(str);
}
console.log(matchesPattern('800-555-3888'))
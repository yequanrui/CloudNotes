/*
题目描述
给定字符串 str，检查其是否包含连续重复的字母（a-zA-Z），包含返回 true，否则返回 false
*/
/*
示例1
输入
'rattler'
输出
true
*/
function containsRepeatingLetter(str) {
  return /([a-zA-z])\1/.test(str);
}

var str = 'rattler';

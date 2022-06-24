/*
题目描述
将数组 arr 中的元素作为调用函数 fn 的参数
*/
/*
示例1
输入
function (greeting, name, punctuation)
{return greeting + ', ' + name + (punctuation || '!');}
, ['Hello', 'Ellie', '!']
输出
Hello, Ellie!
*/

//解法一:利用apply方法
// function argsAsArray(fn, arr) {
//   console.log( fn.apply(fn,arr));
// }
argsAsArray(function (greeting, name, punctuation) { return greeting + ', ' + name + (punctuation || '!'); }
  , ['Hello', 'Ellie', '!']);

// 解法二:利用扩展运算符
function argsAsArray(fn, arr) {
  console.log(fn(...arr));
}
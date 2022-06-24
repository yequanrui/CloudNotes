/*
题目描述
将函数 fn 的执行上下文改为 obj 对象
*/
/*
示例1
输入
function () {return this.greeting + ', ' + this.name + '!!!';}
,
{greeting: 'Hello', name: 'Rebecca'}
输出
Hello, Rebecca!!!
*/

/*
 分析题意:书写一个函数speak,该函数接收两个参数,一个是个函数fn,一个是个对象obj.希望将传入的函数的上下文绑定成传入的对象obj.
         使得fn调用后,内部变量的值都取得obj的属性值.
  因此,这是一道函数作为参数传入的高阶函数应用与call,apply方法知识点联合考查的题目
*/
//解法一:利用call方法:
function speak(fn, obj) {
  return fn.call(obj);
}
//解法二:利用apply方法:
function speak(fn, obj) {
  return fn.call(obj);
}
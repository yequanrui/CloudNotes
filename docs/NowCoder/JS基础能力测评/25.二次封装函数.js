/*
题目描述
已知函数 fn 执行需要 3 个参数。请实现函数 partial，调用之后满足如下条件：
1、返回一个函数 result，该函数接受一个参数
2、执行 result(str3) ，返回的结果与 fn(str1, str2, str3) 一致
*/
/*
示例1
输入
 var sayIt = function(greeting, name, punctuation) {
                         return greeting + ', ' + name + (punctuation || '!'); };
 partial(sayIt, 'Hello', 'Ellie')('!!!');
输出
Hello, Ellie!!!
*/

/*
 分析题意:
   题目要求传入一个函数参数,两个其他参数.根据传入的函数sayIt和输出的结果来看,partial中传入的除函数外的其他两个参数
是作为参数被传入了函数参数sayIt中的.而题目中又讲到了,还要返回一个函数result,接收一个参数,其调用结果和sayIt调用结果
相同.于是可知:result(str3),相当于调用sayIt(str1,str2,str3).仔细思考下就很容易知道,result调用后能够能够和sayIt
调用结果相同,而它接收的参数只有str3,并不存在str1和str2.所以肯定是str1和str2被提前收集到了result函数里头了.
*/
/*解答:根据题意分析,我们知道需要收集str1,和str2这两个参数值,所以可以利用arguments拿到这两个值.然后在result函数内
再通过数组连接方法concat将str1,str2,str3连接起来.最后通过apply方法,巧妙的将数组传入fn中即可.
*/


function partial(fn, str1, str2) {
  var args = [].slice.call(arguments, 1);
  var result = function (str3) {
    var params = args.concat(str3);
    return fn.apply(null, params);
  }
  return result;
}
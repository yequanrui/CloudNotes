/*
题目描述
实现函数 partialUsingArguments，调用之后满足如下条件：
1、返回一个函数 result
2、调用 result 之后，返回的结果与调用函数 fn 的结果一致
3、fn 的调用参数为 partialUsingArguments 的第一个参数之后的全部参数以及 result 的调用参数
*/


/*
 分析题意:这道题可以说是前边同名题的一个不定参数的版本.只不过难度改为了内函数也是不定参数,而不是固定参数而已.
*/
function partialUsingArguments(fn) {
  var outerArgs=[].slice.call(arguments,1);
  var result=function(){
      var innerArgs=[].slice.call(arguments);
      var args=outerArgs.concat(innerArgs);
      return fn.apply(null,args);
  }
  return result;
}
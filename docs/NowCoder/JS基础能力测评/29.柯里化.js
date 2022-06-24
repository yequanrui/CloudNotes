/*
题目描述
已知 fn 为一个预定义函数，实现函数 curryIt，调用之后满足如下条件：
1、返回一个函数 a，a 的 length 属性值为 1（即显式声明 a 接收一个参数）
2、调用 a 之后，返回一个函数 b, b 的 length 属性值为 1
3、调用 b 之后，返回一个函数 c, c 的 length 属性值为 1
4、调用 c 之后，返回的结果与调用 fn 的返回值一致
5、fn 的参数依次为函数 a, b, c 的调用参数
*/

function curryIt(fn) {
  var params=[];
  return function a (paramA){
      params.push(arguments[0]);
      return function b(paramB){
            params.push(arguments[0]);
          return function c(paramC){
                params.push(arguments[0]);
              return fn.apply(null,params)
          }
      }
  }
}
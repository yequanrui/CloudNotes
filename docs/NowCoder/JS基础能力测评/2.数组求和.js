/*
题目描述:
计算给定数组 arr 中所有元素的总和
输入描述:
数组中的元素均为 Number 类型
*/
/*
输入
[ 1, 2, 3, 4 ]
输出
10
*/

//解法1:利用数组的reduce方法:
function sum(arr) {
  return arr.reduce(function(prev,next){return prev+next});
}
//解法2:直接使用变量求和:
function sum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}
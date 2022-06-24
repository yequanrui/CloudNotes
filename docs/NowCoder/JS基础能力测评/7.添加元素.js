/*
题目描述
在数组 arr 开头添加元素 item。不要直接修改数组 arr，结果返回新的数组
*/
/*
示例1
输入
[1, 2, 3, 4], 10
输出
[10, 1, 2, 3, 4]
*/

//解法1:使用数组的filter方法,复制一个新数组:
function prepend(arr, item) {
  var arr1=arr.filter(function(){return true});
  arr1.unshift(item);
  return arr1;
}
//解法2:使用数组的map方法,复制一个新数组:
function prepend(arr, item) {
  var arr1 = arr.map(function (el) { return el });
  arr1.unshift(item);
  return arr1;
}

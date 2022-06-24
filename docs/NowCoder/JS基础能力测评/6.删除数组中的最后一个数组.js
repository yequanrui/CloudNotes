/*
题目描述
删除数组 arr 最后一个元素。不要直接修改数组 arr，结果返回新的数组
*/
/*
示例1
输入
[1, 2, 3, 4]
输出
[1, 2, 3]
*/
//解法1:使用数组的filter方法复制辅助数组:
function truncate(arr) {
  var arr1=arr.filter(function(){return true});
  arr1.pop();
  return arr1;
}
//解法2:使用数组的map方法复制辅助数组:
function truncate(arr) {
  var arr1=arr.map(function(el){return el});
  arr1.pop();
  return arr1;
}
//解法3:使用数组的slice方法:
function truncate(arr) {
  return arr.slice(0,arr.length-1);
}
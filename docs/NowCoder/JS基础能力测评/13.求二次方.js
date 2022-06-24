/*
题目描述
为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组
*/
/*
示例1
输入
[1, 2, 3, 4]
输出
[1, 4, 9, 16]
*/
//解法一:利用数组的map方法:
function square(arr) {
  return arr.map(function(el){return el*el});
}
//解法二:原始遍历法:
function square(arr) {
  var arr1 = [];
  for (var i = 0; i < arr.length; i++){
    arr1[i]=arr[i] * arr[i];
  }
  return arr1;
}
/*
题目描述
合并数组 arr1 和数组 arr2。不要直接修改数组 arr，结果返回新的数组
*/
/*
示例1
输入
[1, 2, 3, 4], ['a', 'b', 'c', 1]
输出
[1, 2, 3, 4, 'a', 'b', 'c', 1]
*/
//解法一:最简单,直接用数组的concat方法,该方法返回一个新数组,与原数组无关:
function concat(arr1, arr2) {
  return arr1.concat(arr2);
}
//解法二:利用辅助数组:
function concat(arr1, arr2) {
  var arr=arr1.filter(function(){return true})
  for(var i=0;i<arr2.length;i++){
         arr.push(arr2[i]);
  }
  return arr;
}
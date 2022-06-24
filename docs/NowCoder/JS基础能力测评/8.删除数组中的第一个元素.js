/*
题目描述
删除数组 arr 第一个元素。不要直接修改数组 arr，结果返回新的数组
*/
/*
示例1
输入
[1, 2, 3, 4]
输出
[2, 3, 4]
*/
// 解法一:使用shift()方法:
//1:使用数组的filter方法,复制一个辅助数组:
function curtail(arr) {
  var arr1=arr.filter(function(){return true});
  arr1.shift();
  return arr1;
}
//2:使用数组的map方法,复制一个辅助数组
function curtail(arr) {
  var arr1 = arr.map(function (el) { return el });
  arr1.shift();
  return arr1;
}

// 解法二: 直接使用索引删除:
// 1:使用数组的filter方法,复制一个辅助数组:
function curtail(arr) {
  var arr1=arr.filter(function(){return true});
  arr1.splice(0,1);
  return arr1;
}
//2:使用数组的map方法,复制一个辅助数组
function curtail(arr) {
  var arr1 = arr.map(function (el) { return el });
  arr1.splice(0,1);
  return arr1;
}
//解法三:使用数组的slice方法:
//slice方法记住是返回的删掉的元素组成的新数组,
//所以要想模拟队列的话直接写上索引1, 返回索引0后边所有元素
function curtail(arr) {
  return arr.slice(1);
}

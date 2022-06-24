/*
题目描述
在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数组
*/
/*
示例1
输入
[1, 2, 3, 4],  10
输出
[1, 2, 3, 4, 10]
*/

//解法1:利用数组filter复制辅助数组:
function append(arr, item) {
  //复制一个数组:
  var arr1 = arr.filter(() => { return true } );
  //末尾添加元素:
  arr1.push(item);
  return arr1;
}
var arr = [1, 2, 3];
console.log(append(arr, 3))
console.log(arr);
//解法2:利用数组map复制辅助数组:
function append(arr, item) {
  var arr1=arr.map(function(el){return el});
  arr1.push(item);
  return arr1;
}
//解法3:直接利用数组concat方法:
function append(arr, item) {
  return arr.concat(item);
}
//错误解法:企图使用数组转字符串,再转换回来,数组转字符串的过程是不可逆的
//下面这种做法是错误的:
function append(arr, item) {
  return (arr.join('')+item).split('');
}
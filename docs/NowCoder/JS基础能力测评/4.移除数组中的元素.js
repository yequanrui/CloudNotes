/*
题目描述
移除数组 arr 中的所有值与 item 相等的元素，直接在给定的 arr 数组上进行操作，并将结果返回
*/
/*
示例1
输入
[1, 2, 2, 3, 4, 2, 2], 2
输出
[1, 3, 4]
*/
function removeWithoutCopy(arr, item) {
  var n=arr.length;
   for(var i=0;i<n;i++){
       if(arr[0]!==item)
           arr.push(arr[0]);
       arr.shift();

  }
  return arr;
}
/*
题目描述
在数组 arr 中，查找值与 item 相等的元素出现的所有位置
*/
/*
示例1
输入
'abcdefabc'
输出
[0, 6]
*/

//解法一:建立一个新数组,遍历需要查找的数组,对比目标值,然后将符合条件的索引值放入新数组中:
function findAllOccurrences(arr, target) {
  var list=[];
  for(var i=0;i<arr.length;i++){
      if(arr[i]==target){
          list.push(i);
      }
  }
  return list;
}
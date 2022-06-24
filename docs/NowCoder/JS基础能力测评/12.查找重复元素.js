/*
题目描述
找出数组 arr 中重复出现过的元素
*/
/*
示例1
输入
[1, 2, 4, 4, 3, 3, 1, 5, 3]
输出
[1, 3, 4]
*/

//解法一:先对数组进行排序,然后每一个元素都和后一个元素比较,相等即重复:
function duplicates(arr) {
  arr.sort(function (a, b) {
  return a - b;
});
   var list=[];
  for (var i = 0; i < arr.length; i++){
      //判断每一个元素和后边的元素相等否,相等的话再判断list中是否已经包含该元素:
        if(arr[i]===arr[i+1]&&list.indexOf(arr[i])==-1){
            list.push(arr[i]);
        }
    }
    return list;
}
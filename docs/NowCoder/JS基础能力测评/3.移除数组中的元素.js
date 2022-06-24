/*
题目描述
移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组
*/
/*
输入
[1, 2, 3, 4, 2], 2
输出
[1, 3, 4]
*/

//解法1:利用辅助数组:
function remove(arr, item) {
  var arr1=[];
  for(var i=0;i<arr.length;i++){
      if(arr[i]!==item){
          arr1.push(arr[i]);
      }
  }
  return arr1;
}
//解法2:利用数组filter方法:
function remove(arr, item) {
  return arr.filter(function(el){return el!==item});
}
//解法3:利用字符串的replace方法:
function remove(arr, item) {
  var re =new RegExp(item,'g')
  var arr1=arr.join('').replace(re,'').split('');
  return arr1;
}
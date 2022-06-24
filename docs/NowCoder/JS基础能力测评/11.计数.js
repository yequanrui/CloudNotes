/*
题目描述
统计数组 arr 中值等于 item 的元素出现的次数
*/
/*
示例1
输入
[1, 2, 4, 4, 3, 4, 3], 4
输出
3
*/

//解法一:利用数组的filter方法,直接将符合的元素装进新数组,然后直接求新数组的长度即为统计次数:
function count(arr, item) {
  var arr1=arr.filter(function(e){return e===item});
  return arr1.length;
}
//解法二:维护一个变量sum,遍历数组作判断,如果元素与给定值相等,则sum加1,sum最终值即为统计次数:
function count(arr, item) {
  var sum=0;
   for(var i=0;i<arr.length;i++){
       if(arr[i]===item){
           sum++;
       }
   }
   return sum;
}
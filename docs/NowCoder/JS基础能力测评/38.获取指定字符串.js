/*
题目描述
给定字符串 str，检查其是否包含 连续3个数字
1、如果包含，返回最新出现的 3 个数字的字符串
2、如果不包含，返回 false
*/
/*
示例1
输入
'9876543'
输出
987
*/
function captureThreeNumbers(str) {
  var re=/(\d{3})/;
  var arr=str.match(re);
  if(arr){
     return arr[0];
  }
  return false;
}
console.log(captureThreeNumbers('9865421'));
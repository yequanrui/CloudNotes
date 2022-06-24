/*
题目描述
修改 js 代码中 parseInt 的调用方式，使之通过全部测试用例
*/
/*
示例1
输入
'12'
输出
12
示例2
输入
'12px'
输出
12
示例3
输入
'0x12'
输出
0
*/


function parse2Int(num) {
  return parseInt(num,10);
}
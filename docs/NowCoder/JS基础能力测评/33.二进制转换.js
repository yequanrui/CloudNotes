/*
题目描述
将给定数字转换成二进制字符串。如果字符串长度不足 8 位，则在前面补 0 到满8位
*/
/*
 示例1
输入
65
输出
01000001
*/
// parseInt(num, 2).toString(8)   //二进制转八进制
// parseInt(num, 8);   //八进制转十进制



function convertToBinary(num) {
    var str = num.toString(2);
    while(str.length < 8) {
        str = "0" + str;
    }
    return str;
}
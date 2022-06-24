/*
题目描述:
找出元素 item 在给定数组 arr 中的位置
输出描述:
如果数组中存在 item，则返回元素在数组中的位置，否则返回 -1
*/
/*
输入:
[ 1, 2, 3, 4 ], 3
输出:
2
*/
//解法1:用数组indexOf方法:
function indexOf(arr, item) {
    if(arr.indexOf(item)){
        return arr.indexOf(item);
    }
    return -1;
}
//解法2:用数组includes方法:
function indexOf(arr, item) {
    if (arr.includes(item)) {
        return arr.indexOf(item);
    }
    return -1;
}
来源：<https://www.nowcoder.com/practice/3245215fffb84b7b81285493eae92ff0?tpId=37>

难度：`较难`

知识点：`数组`

**描述：**

明明生成了`N`个**1到500之间**的随机整数。请你删去其中重复的数字，即相同的数字只保留一个，把其余**相同的数去掉**，然后再把这些数**从小到大排序**，按照排好的顺序输出。

数据范围：1 <= `n` <= 1000，输入的数字大小满足1 <= `val` <= 500

**输入描述：**

第一行先输入随机整数的个数`N`。 接下来的`N`行每行输入一个整数，代表明明生成的随机数。具体格式可以参考下面的"示例"。

**输出描述：**

输出多行，表示输入数据处理后的结果

**示例1：**

> 输入：3
>
> 2
>
> 2
>
> 1
>
> 输出：1
>
> 2
>
> 说明：输入解释：
>
> 第一个数字是3，也即这个小样例的N=3，说明用计算机生成了3个1到500之间的随机整数，接下来每行一个随机数字，共3行，也即这3个随机数字为：
>
> 2
>
> 2
>
> 1
>
> 所以样例的输出为：
>
> 1
>
> 2

<!-- tabs:start -->

#### **JavaScript V8**

```javascript
const res = [];
function func(line) {
  res.push(line);
  // 如果除首位后的数组长度等于首位的值，进入计算
  if (res.length - 1 === Number(res[0])) {
    // 去掉首位
    res.shift();
    // 利用Set去重，从小到大排序并打印
    Array.from(new Set(res))
      .sort((a, b) => a - b)
      .map((e) => print(e));
  }
}
let line;
while ((line = readline())) {
  func(line);
}
```

#### **JavaScript Node / TypeScript**

```javascript
const res = [];
function func(line) {
  res.push(line);
  // 如果除首位后的数组长度等于首位的值，进入计算
  if (res.length - 1 === Number(res[0])) {
    // 去掉首位
    res.shift();
    // 利用Set去重，从小到大排序并打印
    Array.from(new Set(res))
      .sort((a, b) => a - b)
      .map((e) => console.log(e));
  }
}
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", func);
```

<!-- tabs:end -->

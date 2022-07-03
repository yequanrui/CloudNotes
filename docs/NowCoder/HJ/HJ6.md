来源：<https://www.nowcoder.com/practice/196534628ca6490ebce2e336b47b3607?tpId=37>

难度：`简单`

知识点：`排序`

**描述：**

功能：输入一个**正整数**，按照**从小到大的顺序**输出它的**所有质因子**（重复的也要列举）（如180的质因子为2 2 3 3 5 ）

数据范围：1 <= `n` <= 2 × 10<sup>9</sup> + 14

**输入描述：**

输入一个整数

**输出描述：**

按照从小到大的顺序输出它的所有质数的因子，以空格隔开。

**示例1：**

> 输入：180
>
> 输出：2 2 3 3 5

<!-- tabs:start -->

#### **JavaScript V8**

```javascript
function func(line) {
  // 质数因子：任何大于1的数都能被拆分成若干个质数的乘积，另外X的质因子一定小于等于根号X，即质因子的范围为2到√X
  const res = [];
  let num = Number(line);
  let i = 2;
  while (i <= num && i * i <= num) {
    if (num % i === 0) {
      res.push(i);
      num /= i;
      i = 2;
    } else {
      i++;
    }
  }
  // 有个特殊情况，就是输入的这个数，本身就是质数，但还要排除1这个数
  num !== 1 && res.push(num);
  print(res.join(" "));
}
let line;
while ((line = readline())) {
  func(line);
}
```

#### **JavaScript Node / TypeScript**

```javascript
function func(line) {
  // 质数因子：任何大于1的数都能被拆分成若干个质数的乘积，另外X的质因子一定小于等于根号X，即质因子的范围为2到√X
  const res = [];
  let num = Number(line);
  let i = 2;
  while (i <= num && i * i <= num) {
    if (num % i === 0) {
      res.push(i);
      num /= i;
      i = 2;
    } else {
      i++;
    }
  }
  // 有个特殊情况，就是输入的这个数，本身就是质数，但还要排除1这个数
  num !== 1 && res.push(num);
  console.log(res.join(" "));
}
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", func);
```

<!-- tabs:end -->

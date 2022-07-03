来源：<https://www.nowcoder.com/practice/253986e66d114d378ae8de2e6c4577c1?tpId=37>

难度：`入门`

知识点：`数组`、`哈希`

**描述：**

输入一个`int`型整数，按照**从右向左**的阅读顺序，返回一个**不含重复数字**的新的整数。
保证输入的整数最后一位不是`0`。

数据范围：1 <= `n` <= 10<sup>8</sup>

**输入描述：**

输入一个int型整数

**输出描述：**

按照从右向左的阅读顺序，返回一个不含重复数字的新的整数

**示例1：**

> 输入：9876673
>
> 输出：37689

<!-- tabs:start -->

#### **JavaScript V8**

```javascript
function func(line) {
  // 先用reverse逆序，再用Set去重
  print(Array.from(new Set(line.split("").reverse())).join(""));
}
let line;
while ((line = readline())) {
  func(line);
}
```

#### **JavaScript Node / TypeScript**

```javascript
function func(line) {
  // 先用reverse逆序，再用Set去重
  console.log(Array.from(new Set(line.split("").reverse())).join(""));
}
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", func);
```

<!-- tabs:end -->

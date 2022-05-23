来源：<https://www.nowcoder.com/practice/8f3df50d2b9043208c5eed283d1d4da6>

难度：`简单`

知识点：`字符串`

**描述：**

写出一个程序，接受一个十六进制的数，输出该数值的十进制表示。

数据范围：保证结果在1 <= `n` <= 2<sup>31</sup> - 1

**输入描述：**

输入一个十六进制的数值字符串。

**输出描述：**

输出该数值的十进制字符串。不同组的测试用例用\n隔开。

**示例1：**

> 输入：0xAA
>
> 输出：170

<!-- tabs:start -->

#### **JavaScript V8**

```javascript
// 使用Number的parseInt函数转换
// 运行时间：10ms 占用内存：5032KB
while ((line = readline())) {
  console.log(parseInt(line, 16));
}
// 使用Number构造函数转换
// 运行时间：10ms 占用内存：5048KB
while ((line = readline())) {
  console.log(Number(line));
}
```

#### **JavaScript Node**

```javascript
// 使用Number的parseInt函数转换
// 运行时间：80ms 占用内存：6968KB
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(parseInt(line, 16));
});
// 使用Number构造函数转换
// 运行时间：80ms 占用内存：7000KB
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(Number(line));
});
```

#### **TypeScript**

```javascript
// 使用Number的parseInt函数转换
// 运行时间：79ms 占用内存：6968KB
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(parseInt(line, 16));
});
// 使用Number构造函数转换
// 运行时间：79ms 占用内存：7040KB
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(Number(line));
});
```

<!-- tabs:end -->

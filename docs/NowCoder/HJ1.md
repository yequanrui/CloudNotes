来源：<https://www.nowcoder.com/practice/8c949ea5f36f422594b306a2300315da>

难度：`简单`

知识点：`字符串`

**描述：**

计算字符串最后一个单词的长度，单词以空格隔开，字符串长度小于5000。（注：字符串末尾不以空格为结尾）

**输入描述：**

输入一行，代表要计算的字符串，非空，长度小于5000。

**输出描述：**

输出一个整数，表示输入字符串最后一个单词的长度。

**示例1：**

> 输入：hello nowcoder
>
> 输出：8
>
> 说明：最后一个单词为nowcoder，长度为8

<!-- tabs:start -->

#### **JavaScript V8**

```javascript
// 使用split，去最后一项的长度
// 运行时间：10ms 占用内存：5044KB
const line = readline();
const arr = line.split(" ");
print(arr[arr.length - 1].length);
// 使用lastIndexOf，用总长度减去该序号
// 运行时间：11ms 占用内存：5060KB
const line = readline();
print(line.length - 1 - line.lastIndexOf(" "));
```

#### **JavaScript Node**

```javascript
// 使用split，去最后一项的长度
// 运行时间：77ms 占用内存：6840KB
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  const arr = line.split(" ");
  console.log(arr[arr.length - 1].length);
});
// 使用lastIndexOf，用总长度减去该序号
// 运行时间：运行时间：74ms 占用内存：6796KB
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  const arr = line.split(" ");
  console.log(line.length - 1 - line.lastIndexOf(" "));
});
```

#### **TypeScript**

```javascript
// 使用split，去最后一项的长度
// 运行时间：76ms 占用内存：6836KB
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  const arr = line.split(" ");
  console.log(arr[arr.length - 1].length);
});
// 使用lastIndexOf，用总长度减去该序号
// 运行时间：74ms 占用内存：6800KB
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  const arr = line.split(" ");
  console.log(line.length - 1 - line.lastIndexOf(" "));
});
```

<!-- tabs:end -->

来源：<https://www.nowcoder.com/practice/a35ce98431874e3a820dbe4b2d0508b1>

难度：`简单`

知识点：`字符串`、`哈希`

**描述：**

写出一个程序，接受一个由字母、数字和空格组成的字符串，和一个字符，然后输出输入字符串中该字符的出现次数。（不区分大小写字母）

数据范围：1 ≤ `n` ≤ 1000

**输入描述：**

第一行输入一个由字母和数字以及空格组成的字符串，第二行输入一个字符。

**输出描述：**

输出输入字符串中含有该字符的个数。（不区分大小写字母）

**示例1：**

> 输入：ABCabc A
>
> 输出：2

<!-- tabs:start -->

#### **JavaScript V8**

```javascript
// 使用split
let line = readline().toLowerCase();
let target = readline().toLowerCase();
print(line.split(target).length - 1);
// 使用split和filter
let line = readline().toLowerCase();
let target = readline().toLowerCase();
print(line.split("").filter((e) => e === target).length);
// 使用match
let line = readline().toLowerCase();
let target = readline().toLowerCase();
print((line.match(RegExp(target, 'gi')) || []).length);
```

#### **JavaScript Node / TypeScript**

```javascript
// 使用split
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const arr = [];
rl.on("line", (line) => {
  arr.push(line.toLowerCase());
});
rl.on("close", () => {
  console.log(arr[0].split(arr[1]).length - 1);
});
// 使用split和filter
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const arr = [];
rl.on("line", (line) => {
  arr.push(line.toLowerCase());
});
rl.on("close", () => {
  console.log(arr[0].split("").filter((e) => e === arr[1]).length);
});
// 使用match
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const arr = [];
rl.on("line", (line) => {
  arr.push(line.toLowerCase());
});
rl.on("close", () => {
  console.log((arr[0].match(RegExp(arr[1], 'gi')) || []).length);
});
```

<!-- tabs:end -->

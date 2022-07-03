来源：<https://www.nowcoder.com/practice/d9162298cb5a437aad722fccccaae8a7?tpId=37>

难度：`简单`

知识点：`字符串`

**描述：**

输入一个字符串，请按长度为`8`拆分每个输入字符串并进行输出；长度不是`8`整数倍的字符串请在后面补数字`0`，空字符串不处理。

**输入描述：**

连续输入字符串(**每个字符串长度小于等于**`100`)

**输出描述：**

依次输出所有分割后的长度为`8`的新字符串

**示例1：**

> 输入：abc
>
> 输出：abc00000

<!-- tabs:start -->

#### **JavaScript V8**

```javascript
const gap = 8;
function func(line) {
  let str = line;
  while (str.length) {
    // 使用slice拆分，padEnd补齐字符，打印后继续循环
    const s = str.slice(0, gap);
    print(s.padEnd(gap, "0"));
    str = str.slice(gap);
  }
}
let line;
while ((line = readline())) {
  func(line);
}
```

#### **JavaScript Node / TypeScript**

```javascript
const gap = 8;
function func(line) {
  let str = line;
  while (str.length) {
    // 使用slice拆分，padEnd补齐字符，打印后继续循环
    const s = str.slice(0, gap);
    console.log(s.padEnd(gap, "0"));
    str = str.slice(gap);
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

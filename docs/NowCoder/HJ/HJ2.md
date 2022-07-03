来源：<https://www.nowcoder.com/practice/a35ce98431874e3a820dbe4b2d0508b1?tpId=37>

难度：`简单`

知识点：`字符串`、`哈希`

**描述：**

写出一个程序，接受一个由**字母、数字和空格**组成的字符串，和一个字符，然后输出输入字符串中该字符的出现次数。（**不区分大小写字母**）

数据范围：1 ≤ `n` ≤ 1000

**输入描述：**

第一行输入一个由字母和数字以及空格组成的字符串，第二行输入一个字符。

**输出描述：**

输出输入字符串中含有该字符的个数。（不区分大小写字母）

**示例1：**

> 输入：ABCabc
>
> A
>
> 输出：2

<!-- tabs:start -->

#### **JavaScript V8**

```javascript
const res = [];
function func(line) {
  res.push(line);
  // 长度为2时进入计算
  if (res.length === 2) {
    // 方法1：使用该字符分割，分割后数组长度减一即是该字符个数
    print(res[0].toLowerCase().split(res[1].toLowerCase()).length - 1);
    // 方法2：使用该字符全局忽略大小写匹配，匹配后数组长度即是该字符个数
    print((res[0].match(RegExp(res[1], 'gi')) || []).length);
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
  // 长度为2时进入计算
  if (res.length === 2) {
    // 方法1：使用该字符分割，分割后数组长度减一即是该字符个数
    console.log(res[0].toLowerCase().split(res[1].toLowerCase()).length - 1);
    // 方法2：使用该字符全局忽略大小写匹配，匹配后数组长度即是该字符个数
    console.log((res[0].match(RegExp(res[1], 'gi')) || []).length);
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

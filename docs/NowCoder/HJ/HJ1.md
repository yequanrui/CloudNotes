来源：<https://www.nowcoder.com/practice/8c949ea5f36f422594b306a2300315da?tpId=37>

难度：`简单`

知识点：`字符串`

**描述：**

计算字符串最后一个单词的长度，单词以空格隔开，字符串**长度小于5000**。（注：字符串末尾**不以空格为结尾**）

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
function func(line) {
  // 方法1：使用split，取最后一项的长度
  const arr = line.split(" ");
  print(arr[arr.length - 1].length);
  // 方法2：使用lastIndexOf取最后一个空格的序号，用总长度减去该序号再减1即是最后一项的长度
  print(line.length - 1 - line.lastIndexOf(" "));
}
let line;
while ((line = readline())) {
  func(line);
}
```

#### **JavaScript Node / TypeScript**

```javascript
function func(line) {
  // 方法1：使用split，取最后一项的长度
  const arr = line.split(" ");
  console.log(arr[arr.length - 1].length);
  // 方法2：使用lastIndexOf取最后一个空格的序号，用总长度减去该序号再减1即是最后一项的长度
  console.log(line.length - 1 - line.lastIndexOf(" "));
}
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", func);
```

<!-- tabs:end -->

来源：<https://www.nowcoder.com/practice/3ab09737afb645cc82c35d56a5ce802a?tpId=37>

难度：`入门`

知识点：`基础数学`、`语法题`

**描述：**

写出一个程序，接受一个**正浮点数值**，输出该数值的**近似整数值**。如果**小数点后**数值`大于等于0.5`，**向上取整**；`小于0.5`，则**向下取整**。

数据范围：保证输入的数字在**32位浮点**数范围内

**输入描述：**

输入一个正浮点数值

**输出描述：**

输出该数值的近似整数值

**示例1：**

> 输入：5.5
>
> 输出：6
>
> 说明：0.5 >= 0.5，所以5.5需要向上取整为6

**示例2：**

> 输入：2.499
>
> 输出：2
>
> 说明：0.499<0.5，2.499向下取整为2

<!-- tabs:start -->

#### **JavaScript V8**

```javascript
function func(line) {
  // 使用parseFloat判断是否浮点数，再使用round取整
  !isNaN(parseFloat(line)) && print(Math.round(line));
}
let line;
while ((line = readline())) {
  func(line);
}
```

#### **JavaScript Node / TypeScript**

```javascript
function func(line) {
  // 使用parseFloat判断是否浮点数，再使用round取整
  !isNaN(parseFloat(line)) && console.log(Math.round(line));
}
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", func);
```

<!-- tabs:end -->

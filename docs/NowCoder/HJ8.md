来源：<https://www.nowcoder.com/practice/de044e89123f4a7482bd2b214a685201>

难度：`简单`

知识点：`哈希`

**描述：**

数据表记录包含表索引`index`和数值`value`（int范围的**正整数**），请对表索引相同的记录进行合并，即将相同索引的数值进行**求和**运算，输出按照`index`值**升序**进行输出。

数据范围：0 <= `index` <= 11111111、1 <= `value` <= 100000

**输入描述：**

先输入键值对的个数n（1 <= `n` <= 500）
接下来`n`行每行输入成对的`index`和`value`值，以空格隔开

**输出描述：**

输出合并后的键值对（**多行**）

**示例1：**

> 输入：4
0 1
0 2
1 2
3 4
>
> 输出：0 3
1 2
3 4

**示例2：**

> 输入：3
0 1
0 2
8 9
>
> 输出：0 3
8 9

<!-- tabs:start -->

#### **JavaScript V8**

```javascript
function func(line) {
  const res = {};
  for (let i = 0; i < parseInt(line); i++) {
    let [k, v] = readline().split(" ");
    if (res[k]) {
      res[k] += parseInt(v);
    } else {
      res[k] = parseInt(v);
    }
  }
  for (let j in res) {
    console.log(j + " " + res[j]);
  }
}
func(readline());
```

#### **JavaScript Node / TypeScript**

```javascript
const arr = [];
function func(line) {
  arr.push(line);
  // 如果数组长度-1等于首位的值，进入计算
  if (arr.length - 1 === parseInt(arr[0])) {
    // 去掉首位并获取其值
    const n = arr.shift();
    // 用于存合并后的键值对
    const res = {};
    // 遍历剩余数组，如果没有就直接塞进去，如果已经存在就把值取出来相加
    for (let i = 0; i < n; i++) {
      let [k, v] = arr[i].split(" ");
      if (res[k]) {
        res[k] += parseInt(v);
      } else {
        res[k] = parseInt(v);
      }
    }
    for (let j in res) {
      console.log(`${j} ${res[j]}`);
    }
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

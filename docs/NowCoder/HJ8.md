来源：<https://www.nowcoder.com/practice/de044e89123f4a7482bd2b214a685201>

难度：`简单`

知识点：`哈希`

**描述：**

数据表记录包含表索引index和数值value（int范围的正整数），请对表索引相同的记录进行合并，即将相同索引的数值进行求和运算，输出按照index值升序进行输出。

数据范围：0 <= `index` <= 11111111、1 <= `value` <= 100000

**输入描述：**

先输入键值对的个数n（1 <= n <= 500）
接下来n行每行输入成对的index和value值，以空格隔开

**输出描述：**

输出合并后的键值对（多行）

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
  // TODO
}
func(readline());
```

#### **JavaScript Node / TypeScript**

```javascript
function func(line) {
  // TODO
}
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", func);
```

<!-- tabs:end -->

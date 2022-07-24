> 一个经典的面试题：怎么判断一个变量类型是数组还是对象

## typeof

看到这个题目，可能首先就会typeof，typeof是最基本的数据类型判断方式，在不考虑es6的情况下，typeof可能的返回值有下面这些：

```javascript
"undefined"; // 如果这个值未定义
"boolean"; // 如果这个值是布尔值
"string"; // 如果这个值是字符串
"number"; // 如果这个值是数值
"object"; // 如果这个值是对象或null
"function"; // 如果这个值是函数
```

你可以发现typeof可能的返回值并没有array,也就是说typeof并不能帮你检测出一个数组。事实上，无论引用的是什么类型的对象，它都返回 "object"。如果使用typeof去检测一个数组，返回的也将会是"object"。

## instanceof

instanceof运算符用来判断一个构造函数的prototype属性所指向的对象是否存在另外一个要检测对象的原型链上。
使用它的方式是：obj instanceof Object
这句话检测Object.prototype是否存在于参数obj的原型链上。
其实它已经能够很好区别开对象和数组了，看下面的例子：

```javascript
var arr = [1, 2];
var obj = { name: "name" };
console.log(arr instanceof Array); // true
console.log(obj instanceof Array); // false
```

但它也有一丢丢问题，既然它会去在整个原型链上去找，而ECMAScript中Object是所有对象的基础，那么，如果使用instanceof去判断一个数组是不是对象的时候，会不会也返回true呢？

```javascript
var arr = [1, 2];
console.log(arr instanceof Object); // true
console.log(arr instanceof Array); // true
```

答案是肯定的，所以感觉这种判断方式也有小瑕疵。

## constructor

constructor属性返回对创建此对象的函数的引用。所以大多数时候它返回的都是一个对象的构造函数。
看例子：

```javascript
var arr = [1, 2];
console.log(arr.constructor === Array); // true
console.log(arr.constructor === Object); // false
```

但既然想要挑刺，我们就想想这种方式有什么问题。constructor属性其实是存在一个对象的原型中的，所以，如果他的原型被改变了，这种方法还会有用么？
还是例子：

```javascript
var arr = [1, 2];
arr.__proto__ = {};
console.log(arr.constructor === Array); // false
console.log(arr.constructor === Object); // true
```

哈哈，不错所料的，我们改变了arr的__proto__属性为一个对象之后，constructor也给我们做出了错误的判断，所以，这种方法也有被玩坏的可能。

## Object.prototype.toString()

最后就是通过toString()方法，数组原型和对象原型定义的toString()方法不同。
接着看例子：

```javascript
var arr = [1, 2];
var obj = { name: "name" };
console.log(Object.prototype.toString.call(arr) === "[object Array]"); // true
console.log(Object.prototype.toString.call(boj) === "[object Array]"); // false
```

## 总结

- 优先使用`Object.prototype.toString()`，因为该方法几乎无缺陷。
- 次之可以使用`instanceof`和`constructor`

> 适用场景：
>
> - 按钮提交：防止多次提交按钮，只执行最后提交的一次
> - 搜索框联想：防止联想发送请求，只发送最后一次输入

## 简便方法

函数防抖的指导思想是：某些代码可以在没有间断的情况下重复执行。第一次调用函数，创建一个定时器，在指定的时间间隔后执行代码。当第二次调用该函数的时候，它会清除前一次的定时器并设置另一个。如果前一个定时器已经执行过了，这个操作没有意义。然而，如果前一个定时器尚未执行，其实就是替换为一个新的定时器，目的是只有在执行函数的请求停止了一段时间后才执行。

```javascript
function debounce(method, context) {
  clearTimeout(method.tId); // {1}
  method.tId = setTimeout(function () {
    method.call(context); // {2}
  }, 100);
}
```

debounce方法接收两个参数：要执行的函数及在哪个作用域中执行。{1}首先清除之前设置的任何定时器，定时器ID是储存在函数的tId属性中的。定时器代码{2}使用call来确保方法在适当的环境中执行。如果没有给出第二个参数，那么就在全局作用域内执行该方法。

## 传入延时参数

关于防抖函数的写法，网上还看到另一种方法，可以传入延时时间作为参数，使用了闭包，但是大同小异。

```javascript
function debounce(method, delay) {
  var timer = null;
  return function () {
    var context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      method.apply(context, args);
    }, delay);
  };
}
```

## 立即执行

有时候希望函数能够立即执行，然后间隔n秒之后才能被再次触发，这种就很适合用在给按钮做幂等的场景。

```javascript
function debounce(method, delay) {
  var timer = null;
  return function () {
    var context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      method.apply(context, args);
    }, delay);
  };
}
```

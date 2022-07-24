> 适用场景：
>
> - 拖拽场景：固定时间内只执行一次，防止超高频次触发位置变动
> - 缩放场景：浏览器resize

浏览器的DOM操作比起非DOM交互需要更多的内存和cpu时间，连续过多的DOM操作可能会导致浏览器挂起甚至崩溃。比如使用onresize，onscroll这些可能会被连续触发的事件的时候，如果事件处理程序中进行了过多地DOM操作，可能就会使得浏览器崩溃。而为了绕开这个问题，可能就需要使用到函数节流。

```javascript
function resizeDiv() {
  //在窗口尺寸改变的时候，调整div的高度
  var div = document.getElementById("myDiv");
  console.log(div.offsetWidth);
  div.style.height = div.offsetWidth + "px";
}
window.onresize = function () {
  resizeDiv();
};
```

上面的代码在我简单的拉伸窗口的时候被连续执行了，如果是更复杂的DOM操作，很可能使得浏览器崩溃。其实我想要的只是在我改变完窗口大小后，再调整一次myDiv的高度。

## 使用时间差

在开始处多设置了一个开始时间，然后在每次调用的时候判断当前时间是否有超过预设的时间间隔，如果超过了，就立即执行一次事件处理函数，然后再将当前时就按记录下来，如此往复。

```javascript
function throttle(method, duration) {
  var begin = new Date(); //{1}
  return function () {
    var context = this,
      args = arguments,
      current = new Date();
    if (current - begin >= duration) { // {2}
      method.apply(context, args);
      begin = current;
    }
  };
}
```

## 使用定时器

还可以使用定时器来实现。

```javascript
function throttle(method, duration) {
  var timer;
  return function () {
    var context = this, args = arguments;
    if (!timer) {
        timer = setTimeout(function () {
            method.apply(context, args);
            timer = null;
      }, duration)
    }
  }
}
```

以window.onresize为例，不直接执行事件处理函数了。

```javascript
window.onresize = throttle(resizeDiv, 1000);
```

这样，多数情况下，用户察觉不到变化，但能够给浏览器节省很多计算。

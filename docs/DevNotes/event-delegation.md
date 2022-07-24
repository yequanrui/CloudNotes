面试中常会问到的一个问题，事件委托，我觉得除了能够看你对dom2事件的了解程度外，对浏览器的兼容也是有一定考察的。

考察到的点主要在addEventListener(),attachEvent(),事件对象等。
常见的考察方式是问你如何在一个列表中，**点击某个li，就弹出被点击li的索引**，或者让你**实现类似JQuery的on和off这两个方法**。

简单来做，就可以给所有的li添加dom0级的事件，每个li都绑定一个onclick事件：

```javascript
window.onload = function () {
  // dom0级的方式，直接为每个li绑定事件
  var ul = document.getElementById("ul");
  var lis = ul.querySelectorAll("li");
  for (var i = 0; i < lis.length; i++) {
    (function (j) {
      lis[j].onclick = function (e) {
        alert(j + 1);
      };
    })(i);
  }
};
```

这种方式很简单，但缺点也很明显，其实可以利用事件冒泡，把事件绑定在li的父级ul上，在点击之后，就会被ul的事件处理程序捕获到，从而处理。
这里要注意的就是兼容问题了，addEventListener并不被IE9以下的浏览器支持，与之对应的是attachEvent方法。而且，事件对象在标准和IE浏览器中也有不同。

```javascript
window.onload = function () {
  var ul = document.getElementById("ul");
  if (ul.addEventListener) {
    ul.addEventListener("click", handler);
  } else if (ul.attachEvent) {
    ul.attachEvent("onclick", handler);
  }
  function handler(e) {
    var ul = document.getElementById("ul");
    var e = e || window.event; //事件对象兼容
    var liList = ul.getElementsByTagName("li");
    for (var i = 0; i < liList.length; i++) {
      var target = e.target || e.srcElement; //事件对象属性的不同
      if (target == liList[i]) {
        alert(i + 1);
      }
    }
  }
};
```

上面的代码中就判断了浏览器支持的情况，从而去适配标准浏览器和IE浏览器。

如果是然你实现类似JQuery的on方法和off方法，可以参考下面啊的代码，这里统一参考js高程中的写法，定义一个EventUtil对象，来放这些方法。

```javascript
var EventUtil = {
  addHandler: function (element, type, handler) {
    if (element.addEventListener) {
      element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
      element.attachEvent("on" + type, handler);
    } else {
      element["on" + type] = handler;
    }
  },
  removeHandler: function (element, type, handler) {
    if (element.removeEventListener) {
      element.removeEventListener(type, handler, false);
    } else if (element.detachEvent) {
      element.detachEvent("on" + type, handler);
    } else {
      element["on" + type] = null;
    }
  },
};
```

基本到这里也就完成了事件的绑定和解绑的方法。不过上面也说到了，这里其实最主要的也在兼容性的处理上，就不得不提一下事件对象了，dom和IE中的事件对象还是有很大不同的。
常用的几个如preventDefault(),stopPropagation(),target等,IE下均有不同的表示。见下

| 功能             | 标准浏览器相关属性 | IE相关属性   |
| ---------------- | ------------------ | ------------ |
| 事件的目标       | target             | srcElement   |
| 取消事件默认行为 | preventDefault()   | returnValue  |
| 取消事件冒泡     | stopPropagation()  | cancelBubble |

剩下的就是利用这几个属性，扩展一下EventUtil对象，来做兼容了。

```javascript
var EventUtil = {
  getEvent: function (event) {
    return event ? event : window.event;
  },
  getTarget: function (event) {
    return event.target || event.srcElement;
  },
  preventDefault: function (event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  },
  stopPropagation: function (event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      event.cancelBubble = true;
    }
  },```

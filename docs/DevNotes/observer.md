观察者模式又名"发布-订阅"模式，能够有效的将模块间进行解耦。

观察者模式是运用在一些有一对多关系的场景中，一个对象有了一些改变，其他依赖于该对象的对象也要做一些动作。

比如，上课，老师提了一个问题，所有会这道问题的学生都解答这个问题。其中老师就是主对象，老师提问就是状态改变，学生是依赖于老师的对象，学生回答问题就是针对老师提问这个状态所做的改变。

弄清楚这个原理，我们来看看怎么用代码实现。

我们可以创建一个对象帮我们监控主对象得改变，而且要通知订阅了主对象改变这个时间的依赖对象做出相应，还以上面老师提问学生答为例，我们创一个Observer的对象，它得能帮学生去订阅老师提问某个问题，也得能帮老师发出提问得消息，而且既然有订阅，就得有解除订阅，所以得有一个解除订阅得方法，基于这个思路，我们设计的Observer差不多就是以下这个样子：

```javascript
const Observer = (function () {
  var _messages = {};
  return {
    add: () => {}, // 订阅消息
    emit: () => {}, // 发布消息
    remove: () => {}, // 取消消息的订阅
  };
})();
```

用立即执行函数创建一个私有变量，_messages存放被订阅的消息，以及订阅者所要执行的操作。

接下来我们看add方法，add要把被订阅的消息，以及订阅者的操作存放到 _messages 里，以供在消息发出时，订阅者能够做出相应回应。所以add方法可以这么实现：

```javascript
add: (type, fn) => { // type就是消息，fn就是订阅者的回调
  if (_messages[type]) {
    _messages[type].push(fn);
  } else {
    _messages[type] = [fn];
  }
};
```

方法很简单，就是看_messages里有没有某个消息，如果没有就创建数组，把回调方里，否者直接放数组里。因为可能有多个订阅者订阅同一个消息，所以要用数组。

接下来是emit方法，emit用于发出某个消息，其实就是去_messages中看某个消息有没有订阅者，有的话就把所有的回调执行一遍。

```javascript
emit: (type, args) => {
  if (_messages[type] && _messages[type] instanceof Array) {
    for (let i = 0; i < _messages[type].length; i++) {
      typeof _messages[type][i] == "function" &&
        _messages[type][i].call(this, args);
    }
  }
};
```

最后就是remove方法，其实就是看某个消息找某个订阅者的回调，删掉就行。

```javascript
remove: (type, fn) => {
  if (_messages[type] && _messages[type] instanceof Array) {
    for (let i = _messages[type].length - 1; i >= 0; i--) {
      _messages[type][i] == fn && _messages[type].splice(i, 1);
    }
  }
};
```

组合起来，一个完整的观察者对象就是下面这样：

```javascript
const Observer = (function () {
  var _messages = {};
  return {
    add: (type, fn) => {
      if (_messages[type]) {
        _messages[type].push(fn);
      } else {
        _messages[type] = [fn];
      }
    },
    emit: (type, args) => {
      if (_messages[type] && _messages[type] instanceof Array) {
        for (let i = 0; i < _messages[type].length; i++) {
          typeof _messages[type][i] == "function" &&
            _messages[type][i].call(this, args);
        }
      }
    },
    remove: (type, fn) => {
      if (_messages[type] && _messages[type] instanceof Array) {
        for (let i = _messages[type].length - 1; i >= 0; i--) {
          _messages[type][i] == fn && _messages[type].splice(i, 1);
        }
      }
    },
  };
})();
```

接下来，让我们看看它是怎么工作的，还以学生答问题为例，我们先来一个老师，老师就是发布提问：

```javascript
var Teacher = function () {
  this.question = function (questionName) {
    console.log("老师提问了： " + questionName);
    Observer.emit(questionName, { question: questionName });
  };
};
```

然后是学生，学生有一个回答问题的方法，有一个监听问题的方法，只监听自己会的问题，另外还有一个睡觉方法，睡觉其实就是取消订阅某个消息。

```javascript
var Student = function (name) {
  this.name = name;
  this.answer = function (args) {
    console.log(name + "回答老师的问题： " + args.question);
  };
};
Student.prototype = {
  listen: function (questionName) {
    console.log(this.name + "想要回答问题： " + questionName);
    Observer.add(questionName, this.answer);
  },
  sleep: function (questionName) {
    console.log(this.name + "睡着了");
    Observer.remove(questionName, this.answer);
  },
};
```

listen和sleep可以放到原型链上，但是answer方法放在实例上了，因为如果再放在原型链上，观察者就没法分清哪个回调是哪个订阅者的了。

有了以上两个对象，我们结合下面的代码，看看观察者怎么工作：

```javascript
var s1 = new Student("小明");
var s2 = new Student("小红");
s1.listen("谁最帅");
s2.listen("谁最帅");
var t = new Teacher();
setTimeout(() => {
  t.question("谁最帅");
  s1.sleep("谁最帅");
  setTimeout(() => {
    t.question("谁最帅");
  }, 2000);
}, 2000);
```

我们创建两个学生，分别监听了'谁最帅'这个问题，然后创建一个老师，老师两秒后提问'谁最帅'，两个学生应该都回答该问题。然后学生s1睡着了，于是不再监听'谁最帅'，老师2秒后又提问，这次只有学生s2回答该问题。
完整的结果是下面这样的。

```plaintext
小明想要回答问题： 谁最帅
小红想要回答问题： 谁最帅
老师提问了： 谁最帅

小明回答老师的问题： 谁最帅
小红回答老师的问题： 谁最帅
小明睡着了

老师提问了： 谁最帅
小红回答老师的问题： 谁最帅
```

会出现上面的结果就是观察者在起作用，两个学生监听提问，Observer往_messages中插入了'谁最帅'，而且把两位学生的回答方法放进了数组里，等老师提问，Observer就去_messages中依次执行。后来s1取消了订阅，Observer从_messages删除了该对象对事件的订阅，从而第二次提问的时候，s1就不再回答了。

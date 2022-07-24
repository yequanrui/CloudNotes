在之前的[一篇文章](https://www.cnblogs.com/EaVango/p/14684284.html "一篇文章")中简单理了下JS的运行机制，顺着这条线深入就又遇到了几个概念，什么是事件循环，什么又是宏任务、微任务呢，今天用这篇文章梳理一下。
以下是我自己的理解，如有错误，还望不吝赐教。

## 事件循环与消息队列

首先大家都知道JS是一门单线程的语言，所有的任务都是在一个线程上完成的。而我们知道，有一些像I/O，网络请求等等的操作可能会特别耗时，如果程序使用"同步模式"等到任务返回再继续执行，就会使得整个任务的执行特别缓慢，运行过程大部分事件都在等待耗时操作的完成，效率特别低。

为了解决这个问题，于是就有了**事件循环（Event Loop）**这样的概念，简单来说就是在程序本身运行的主线程会形成一个"执行栈"，除此之外，设立一个"任务队列",每当有异步任务完成之后，就会在"任务队列"中放置一个事件，当"执行栈"所有的任务都完成之后，会去"任务队列"中看有没有事件，有的话就放到"执行栈"中执行。

这个过程会不断重复，这种机制就被称为事件循环（Event Loop）机制。

## 宏任务/微任务

宏任务可以被理解为每次"执行栈"中所执行的代码，而浏览器会在每次宏任务执行结束后，在下一个宏任务执行开始前，对页面进行渲染，而宏任务包括：

- **script(整体代码)**
- **setTimeout**
- **setInterval**
- **I/O**
- **UI交互事件**
- **postMessage**
- **MessageChannel**
- **setImmediate**
- **UI rendering**

微任务,可以理解是在当前"执行栈"中的任务执行结束后立即执行的任务。而且早于页面渲染和取任务队列中的任务。宏任务包括：

- **Promise.then**
- **Object.observe**
- **MutaionObserver**
- **process.nextTick**

他们的运行机制是这样的：

- **执行一个宏任务（栈中没有就从事件队列中获取）**
- **执行过程中如果遇到微任务，就将它添加到微任务的任务队列中**
- **宏任务执行完毕后，立即执行当前微任务队列中的所有微任务（依次执行）**
- **当前宏任务执行完毕，开始检查渲染，然后GUI线程接管渲染**
- **渲染完毕后，JS线程继续接管，开始下一个宏任务（从事件队列中获取）**

![image](https://img2020.cnblogs.com/blog/1235298/202104/1235298-20210430155946473-2058572687.png)

在了解了宏任务和微任务之后，整个Event Loop的流程图就可以用下面的流程图来概括：

![image](https://img2020.cnblogs.com/blog/1235298/202104/1235298-20210430161143854-1984822566.png)

## 例子

如无特殊说明，我们用setTimeout来模拟异步任务，用Promise来模拟微任务。

### 主线程上有宏任务和微任务

```javascript
console.log("task start");
setTimeout(() => {
  console.log("setTimeout");
}, 0);
new Promise((resolve, reject) => {
  console.log("new Promise");
  resolve();
}).then(() => {
  console.log("Promise.then");
});
console.log("task end");
//----------------------执行结果----------------------
// task start
// new Promise
// task end
// Promise.then
// setTimeout
```

这个例子比较简单，就是在主任务上加了一个宏任务（setTimeout），加了一个微任务（Promise.then）,看执行的顺序，打印出了主任务的task start、new Promise、task end，主任务完成，接下来执行了微任务的Promise.then，到此第一轮事件循环结束，去任务队列里取出了setTimeout并执行。

### 主线程上有多个宏任务

```javascript
console.log("task start");
setTimeout(() => {
  console.log("setTimeout1");
  new Promise((resolve, reject) => {
    console.log("new Promise1");
    resolve();
  }).then(() => {
    console.log("Promise.then1");
  });
}, 0);
setTimeout(() => {
  console.log("setTimeout2");
  new Promise((resolve, reject) => {
    console.log("new Promise2");
    resolve();
  }).then(() => {
    console.log("Promise.then2");
  });
}, 0);
console.log("task end");
//----------------------执行结果----------------------
// task start
// task end
// setTimeout1
// new Promise1
// Promise.then1
// setTimeout2
// new Promise2
// Promise.then2
```

这个例子主要是在主线程上有两个异步任务要被加到任务队列，同时每个任务又都有自己的微任务。从这个例子可以看出，被加到任务队列中的任务会一个一个被取出来放到主线程上执行，完成自己的微任务之后，才会再去事件队列中取下一个事件。

### 在微任务中添加宏任务和微任务

跟上个例子相比，我们在Promise.then里加上一个setTimeout和一个Promise.then。

```javascript
console.log("task start");
setTimeout(() => {
  console.log("setTimeout1");
}, 0);
new Promise((resolve, reject) => {
  console.log("new Promise1");
  resolve();
}).then(() => {
  console.log("Promise.then1");
  setTimeout(() => {
    console.log("setTimeout2");
  }, 0);
  new Promise((resolve, reject) => {
    console.log("new Promise2");
    resolve();
  }).then(() => {
    console.log("Promise.then2");
  });
});
console.log("task end");
//----------------------执行结果----------------------
// task start
// new Promise1
// task end
// Promise.then1
// new Promise2
// Promise.then2
// setTimeout1
// setTimeout2
```

猜对了么，正常的主任务没有变化，只是在执行第一次微任务的时候，发现了一个宏任务，于是被加进了任务队列。遇到了一个微任务，放到了微任务队列，执行完之后又扫了一遍微任务队列，发现有微任务，于是接着执行完微任务，到这，第一遍事件循环才结束，从任务队列里拿出了两次setTimeout执行了。

### 在异步宏任务中添加宏任务和微任务

其他无异，把刚才添加到Promise.then中的内容添加到setTimeout中。

```javascript
console.log("task start");
setTimeout(() => {
  console.log("setTimeout1");
  setTimeout(() => {
    console.log("setTimeout2");
  }, 0);
  new Promise((resolve, reject) => {
    console.log("new Promise2");
    resolve();
  }).then(() => {
    console.log("Promise.then2");
  });
}, 0);
new Promise((resolve, reject) => {
  console.log("new Promise1");
  resolve();
}).then(() => {
  console.log("Promise.then1");
});
console.log("task end");
//----------------------执行结果----------------------
// task start
// new Promise1
// task end
// Promise.then1
// setTimeout1
// new Promise2
// Promise.then2
// setTimeout2
```

第一遍主任务执行大家都很明白了，到Promise.then1结束，然后取任务队列中的setTimeout，执行过程中又发现了一个setTimeout，放到任务队列中，并且发现一个Promise.then2，把这个微任务执行完之后，第二遍事件循环才结束，然后开始第三遍，打印出了setTimeout2。

### 有async/await参与

```javascript
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2");
}
console.log("script start");
setTimeout(function () {
  console.log("setTimeout");
}, 0);
async1();
new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});
console.log("script end");
//---------------------执行结果-------------------------
// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// setTimeout
```

这个例子的特殊之处在于有了async/await的参与，其实也很简单，可以简单的理解成async方法会返回一个promise,里面遇到await会阻塞方法的执行，跳出该方法，如果await后跟的返回一个promise,就等待promise完成之后继续执行后续方法，如果返回的不是一个promise,就不用等待，但后续方法也都相当于在then方法中。

按照上面的思路，看一下代码，首先执行主程序，打印script start，然后遇到一个setTimeout,所以回调放进事件队列中，继续执行，进入方法async1中，这是一个async方法，先打印async1 start，然后进入async2方法，打印async2，同时没有返回promise,所以相当于不用等待方法完成，这时候async1 end相当于放进了微任务队列，继续往下，打印promise1，promise2放进微任务队列，最后打印script end，然后看微任务队列中，打印出async1 end和promise2，最后从任务队列中取出setTimeout打印出来。

### 加入事件冒泡

事件循环遇到事件冒泡会发生什么？

```html
<div class="outer">
  <div class="inner"></div>
</div>
```

```javascript
var outer = document.querySelector(".outer");
var inner = document.querySelector(".inner");
function onClick() {
  console.log("click");

  setTimeout(function () {
    console.log("setTimeout");
  }, 0);

  Promise.resolve().then(function () {
    console.log("new Promise");
  });
}
inner.addEventListener("click", onClick);
outer.addEventListener("click", onClick);
```

点击inner，结果：

```javascript
click // inner的click
promise // inner的promise
click // outer的click
promise // outer的promise
timeout // inner的timeout
timeout // outer的timeout
```

我觉得解释应该是这样的：

1. 开始执行，因为事件冒泡的缘故，事件触发线程会将向上派发事件的任务放入任务队列。接着执行，打印了click,把timeout放入任务队列，把promise放入了微任务队列。
2. 执行栈清空，check微任务队列，发现微任务，打印promise，第一遍事件循环结束。
3. 从任务队列里取出任务，执行outer的click事件，打印click,把outer的timeout放入任务队列，把outer的promise放入了微任务队列。执行inner放入任务队列的timeout。
4. 执行栈清空，check微任务队列，发现微任务，打印promise，第二遍事件循环结束。
5. 从任务队列里取出任务，把timeout打印出来。

### JS触发上面的click事件

一样的代码，只不过用JS触发结果就会不一样。
对代码做了稍稍改变，将click拆分成两个方法，方便追踪是谁被触发了。

```javascript
var outer = document.querySelector(".outer");
var inner = document.querySelector(".inner");
const onInnerClick = (e) => {
  console.log("inner cilcked");
  setTimeout(function () {
    console.log("inner timeout");
  }, 0);
  Promise.resolve().then(function () {
    console.log("inner promise");
  });
};
const onOuterClick = (e) => {
  console.log("outer clicked");
  setTimeout(function () {
    console.log("outer timeout");
  }, 0);
  Promise.resolve().then(function () {
    console.log("outer promise");
  });
};
inner.addEventListener("click", onInnerClick);
outer.addEventListener("click", onOuterClick);
inner.click();
```

执行结果：

```javascript
inner cilcked
outer clicked
inner promise
outer promise
inner timeout
outer timeout
```

之所以会出现这样的差异，我的理解是JS代码执行中的click事件，分发了一个同步的冒泡事件。所以在第一个click事件结束之后，调用栈中有outer的click事件，所以出现了两个连续的click。

这也是根据结果猜测过程，心里没底。

### 在node环境中执行

加入node环境特有的process.nextTick，再看下面这个例子：

```javascript
console.log(1);
setTimeout(() => {
  console.log(2);
  process.nextTick(() => {
    console.log(3);
  });
  new Promise((resolve) => {
    console.log(4);
    resolve();
  }).then(() => {
    console.log(5);
  });
});
new Promise((resolve) => {
  console.log(7);
  resolve();
}).then(() => {
  console.log(8);
});
process.nextTick(() => {
  console.log(6);
});
setTimeout(() => {
  console.log(9);
  process.nextTick(() => {
    console.log(10);
  });
  new Promise((resolve) => {
    console.log(11);
    resolve();
  }).then(() => {
    console.log(12);
  });
});
```

以上代码会有两个结果
**node <11: 1 7 6 8 2 4 9 11 3 10 5 12**
**node>=11: 1 7 6 8 2 4 3 5 9 11 10 12**

NodeJS中微队列主要有2个：

1. Next Tick Queue：是放置process.nextTick(callback)的回调任务的
2. Other Micro Queue：放置其他microtask，比如Promise等

在浏览器中，也可以认为只有一个微队列，所有的microtask都会被加到这一个微队列中，但是在NodeJS中，不同的microtask会被放置在不同的微队列中。

Node.js中的EventLoop过程：

1. 执行全局Script的同步代码
2. 执行microtask微任务，先执行所有Next Tick Queue中的所有任务，再执行Other Microtask Queue中的所有任务
3. 开始执行macrotask宏任务，共6个阶段，从第1个阶段开始执行相应每一个阶段macrotask中的所有任务，注意，这里是所有每个阶段宏任务队列的所有任务，**在浏览器的Event Loop中是只取宏队列的第一个任务出来执行，每一个阶段的macrotask任务执行完毕后，开始执行微任务**，也就是步骤2
4. Timers Queue -> 步骤2 -> I/O Queue -> 步骤2 -> Check Queue -> 步骤2 -> Close Callback Queue -> 步骤2 -> Timers Queue ......

**Node 11.x新变化
现在node11在timer阶段的setTimeout,setInterval...和在check阶段的immediate都在node11里面都修改为一旦执行一个阶段里的一个任务就立刻执行微任务队列。为了和浏览器更加趋同.**

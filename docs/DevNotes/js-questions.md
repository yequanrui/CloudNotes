# JavaScript详解面试题

## **1、以下哪个先打印？**

![图片](https://mmbiz.qpic.cn/mmbiz_png/eXCSRjyNYcZRiaI5hwxujZ6EKCqOn4qUH6iaBM9SgKQMMULXVlc0Jh2RPln30ht1ia1iaY8WYUcqG1RIYCpwcwZLPw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

答案是第二种情况（打印出queueMicroTask更好），因为来自queueMicroTask的任务在调用栈为空之后且在调用事件循环之前被调用，对于setTimeout而言，任务是eventQeue的一部分。

## **2、控制台输出是什么？**

![图片](https://mmbiz.qpic.cn/mmbiz_png/eXCSRjyNYcZRiaI5hwxujZ6EKCqOn4qUH4YpPb4sA7GDeCh9BLGos0De7V7d1Wpr9J3hrQelhPyxGa8ibf5M6qibA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

答案是输出为10，因为将对象传递给函数时的对象相似，仅传递其值，而不传递对内存位置的实际引用。这就是为什么更改仅影响函数范围内的参数的原因。

## **3、控制台输出是什么？**

![图片](https://mmbiz.qpic.cn/mmbiz_png/eXCSRjyNYcZRiaI5hwxujZ6EKCqOn4qUHNrmMJ7Mqk5wEgKL9Hjdt0vOEVOkKPRbALfeXOLeLdewbtt7Pt9JaCg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

在这种情况下，由于我们两次定义了相同的变量，因此，会在控制台上引发错误。

但是，如果我们使用var定义相同的变量，则控制台将返回50 。同样，在使用const定义变量时，我们将得到相同的错误。

## **4、Line1和Line2的控制台输出是什么？**

![图片](https://mmbiz.qpic.cn/mmbiz_png/eXCSRjyNYcZRiaI5hwxujZ6EKCqOn4qUHznhbBwLceyCnYywOmcwkMjP6rUuZ2e0Ik2lrKgyLBUz0g49ILRg5SA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

在Line1中，我们有两个相互比较的对象，并且它们都是唯一的，因此它将在控制台上记录为False。

在Line2中，我们使用===运算符来检查两个字符串基元而不是字符串对象，因此我们得到True。

## **5、控制台输出是什么，为什么？**

![图片](https://mmbiz.qpic.cn/mmbiz_png/eXCSRjyNYcZRiaI5hwxujZ6EKCqOn4qUHYt0MBTcEZU02xicPoASicibxfibQplbOWBzPib0BAzTZ2MN4bUbETTPuzXQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

与之前的问题类似，我们比较了两个唯一的对象。在这种情况下，只有一个唯一的对象，它具有两个常量x和y，它们指向内存中的唯一对象，并在控制台上返回True。

## **6、数组对象是JavaScript中的原始对象吗？**

在JavaScript中，我们处理的大多数事物都是对象，类似地，数组只是JavaScript中的特殊对象，它们具有其他对象所没有的属性。

## **7、以下函数的返回类型是什么？**

![图片](https://mmbiz.qpic.cn/mmbiz_png/eXCSRjyNYcZRiaI5hwxujZ6EKCqOn4qUHU5t2ksXksaQqVpwhYO1snLJHjq7xtWrmBdry1xenMoeia1G6lfYgZVg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

答案，是B，因为异步函数在JavaScript中返回Promises 。

## **8、等待关键字会阻止应用程序中的所有JavaScript代码执行，直到返回等待的Promises？**

答案是False，await关键字仅阻止执行包含await关键字的特定函数内的代码。

## **9、以下打印什么？**

![图片](https://mmbiz.qpic.cn/mmbiz_png/eXCSRjyNYcZRiaI5hwxujZ6EKCqOn4qUHUibMBmIwe5en9Z5qNib8aRIyZEgDbsQ97iaia3yHNT9ItbAJCOG5uR7pdQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

JavaScript中的函数是对象，typeof name将输出function。

## **10、以下是用于打印“用户名”的****有效语法？**

![图片](https://mmbiz.qpic.cn/mmbiz_png/eXCSRjyNYcZRiaI5hwxujZ6EKCqOn4qUHxkYrwD6LIJknETaWC4uULibskF3jKFKb967zyLXqoxcqx7w0bFibsAQQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

以下语法是有效的，因为我们正在将异步函数的返回值传递给callback。  

## **11、typeof和instanceof之间没有什么区别？**

typeof返回类型， instanceof返回布尔值。

instanceof需要TypeScript，而typeof则不需要。

typeof在右侧使用变量名称， instanceof在左侧和右侧使用值，而不是。

答案是B，因为它们都不要求TypeScript，并且两者都不是JavaScript固有的。

## **12、满足所有承诺后，以下哪个解决方案可以解决？**

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

答案是C，当我们需要等待执行直到所有的都被解决时，Promise.all（）会非常有用。

**13、控制台输****出是什么，为什么？**

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

在这种情况下，我们有＆运算符，它与＆＆运算符完全不同。＆是按位运算符，当我们比较11和3时，它将与1011和0011的二进制相同。结果，只有都为1的位保持为1，返回的输出为0011，它是3的二进制表示形式， 因此3记录在控制台上。

## **14、Object。\[\[Prototype\]\]的值是什么？**

- Object  

- null

- {}

答案是null，因为默认值的对象。\[\[原型\]为空，它会返回undefined在控制台上。该对象位于原型链的顶部，当浏览器查找访问属性的值时，它将遍历原型链，直到找到该值或直到不再遍历所有原型为止。

## **15、空值合并运算符做什么？**

当左侧操作数为null或未定义时，它将返回右侧操作数。

## **16、getElementsByTagName是JavaScript函数吗？**

不，getElementsByTagName是一个Web API函数，就像普通的JS函数一样可用。

## **17、在JavaScript中使用事件委托时**

例如，当我们必须侦听页面加载期间可能不存在的事件时，可以使用事件委托，并在父元素上提供事件处理程序并查看event.target。但是，如今，现代的前端框架和库使此操作变得不必要了。

## **18、以下哪一项不是内置的JS错误类型？**

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

答案是E。

## **19、以下哪一项不是有效的Promise方法？**

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

答案是A。

## **20、创建字符串后，我们可以修改它吗？**

不可以，因为字符串在JavaScript中是不可变的，指向字符串的变量可以分配给另一个字符串。

## **21、承诺链中的嵌套捕获可以捕获在承诺链中向上抛出的错误吗？**

不可以，嵌套是一种用于限制catch语句范围的控制结构。用简单的话来说，嵌套的catch仅捕获其作用域及其以下范围内的故障，而不捕获嵌套范围之外的链中较高的错误。

## **22、控制台输出是什么，为什么？**

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

即使mymap.get（{}）是有效的语法，它也会在控制台上返回undefined。因为set和get中的Object是内存中两个不同的空对象，因此getter不会返回值。

## **23、控制台输出是什么，为什么？**

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

控制台输出将为Map {'a'=> 2，'b'=> 2，'c'=> 1}，这意味着第二个映射中的所有相同键将覆盖第一个映射中的键。

## **24、括号符号可以像点符号一样链接吗？**

是的，可以，obj.prop1.prop2和obj \['prop1'\] \['prop2'\]是等效的。

## **25、for…in循环中会显示什么类型的属性？**

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

答案是B，可枚举属性。

## **26、以下内容是什么？**

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

控制台输出将为'Mohit'，因为内部函数有权访问在外部作用域中声明的变量。

## **27、函数引用自身进行递归的三种方式是什么？**

该函数的名称，一个指向该函数的范围内变量，并使用arguments.callee。

## **28、JavaScript是否支持重载？**

不，JavaScript本身不支持重载，但TypeScript可以。但是，可以在JavaScript中通过在未将所有可能的参数都传递给函数时返回不同的输出来执行重载。

## **29、return语句在数组的forEach循环中做什么？**

它不会返回任何内容，并且如果你需要从循环中返回值，则永远不要使用forEach循环。

## **30、RegExp没有任何属性。那是对的吗？**

不，RegExp具有许多属性，例如.flags和.global。

## **31、控制台输出是什么？**

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

控制台输出将为10和5，因为该函数在Promise中没有异步的内容，并且Promise同步解析。

## **32、在浏览器下一次重画显示内容之前，哪个函数会执行指定的代码块？**

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

requestAnimationFrame（）。

## **33、为什么在导入模块时使用别名？**

大多数时候，我们处理具有默认命名约定的简单导入，除此之外，有时我们不得不处理名称，因为有的名称较长。在这种情况下，使用别名是有帮助的。

## **34、使用缩减函数从数字数组中找到最小值。**

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

## **35、JavaScript中的子程序是什么？**  

子例程是主例程中遇到的函数，然后将其保存到对象并存储以供以后使用。例如，执行范围（变量，参数等）与子例程一起存储。

## **36、我们可以使用eventHandlers剪切和复制来防止用户将内容从浏览器复制到剪贴板吗？**

是的，这些事件处理程序是Web API的一部分。

## **37、创建新对象的三种可能方法是什么？**

new Object（）＆Object.create（）和文字符号，其中我们定义了像this-（const obj = {a：2}）这样的对象。

## **38、控制台输出是什么，为什么？**

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

一个被分配到一个对象，b被分配给一个使用该扩展运算符，它意味着一个和b在技术上是相同的。

c只是一个空对象。

使用Object.assign（）中，c现在被指定到一个，并且后来在这之后，我们改变的值X在一个作为2。

控制台输出将为2,1,1。

## **39、Object.freeze（）的作用是什么？**

它防止添加新属性。

它可以防止更改对象的原型。

它防止更改属性的值。

它防止更改属性的可写性。

## **40、event.target与event.currentTarget有何不同？**

event.currentTarget随着事件起泡而变化，event.target保持不变。

## **41、Array sort（）方法的默认排序是什么？**

按字符值从最小到最大。

## **42、什么是比赛条件？**

当两个线程或异步进程必须完成自身操作以更新某些共享状态时，否则将出现错误或不良结果。

## **43、class关键字在JavaScript中有什么作用？**

使JavaScript更加面向对象只是语法上，即使使用class关键字，JavaScript仍会使用原型继承。

## **44、 queueMicrotask队列中的任务是在后进先出的基础上执行的。真的吗？**

否，任务按照先进先出的顺序执行。

## **45、什么是Shadow DOM API？**

阴影DOM API提供了一种隐藏的单独的DOM，附加到不是通过正常的访问元件JS DOM操作API。它提供Web组件的封装。

## **46、使用哪种方法将影子DOM树附加到指定的元素，并返回对其ShadowRoot的引用？**

Element.attachShadow（）。

## **47、控制台输出是什么，为什么？**

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

它返回h，因为数组在JavaScript中是从零开始的，因此arr \[2\] \[1\]将可以访问外部数组的第3个元素和内部数组的第2个元素，从而得出值“ h”。

## **48、window.localStorage和window.sessionStorage有什么区别？**

它们都将值对存储在Web浏览器中，但是sessionStorage在浏览器关闭后会删除存储的值。

## **49、！运算符返回一个布尔值。真的吗？**

是的，例如，在if语句中，需要在评估中返回一个布尔值，例如if（a！== b）。

## **50、JavaScript中的哪个ES6函数返回一个新数组？**

map（）和filter（）。

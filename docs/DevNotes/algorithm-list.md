# 前端算法: 链表

## 反转链表

反转链表这里一共有三个题目供大家训练。分别是`原地单链表的反转`、`两个一组反转链表`和`K个一组反转链表`，难度由阶梯式上升。

而在面试当中凡是遇到链表，反转类的题目出现的频率也是数一数二的，因此把它当做链表开篇的训练类型，希望大家能引起足够的重视💪。

### No.1 简单的反转链表

反转一个单链表。

示例:

```
输入: 1->2->3->4->5->NULL输出: 5->4->3->2->1->NULL
```

来源: LeetCode 第 206 题

#### 循环解决方案

这道题是链表中的经典题目，充分体现链表这种数据结构`操作思路简单`, 但是`实现上`并没有那么简单的特点。

那在实现上应该注意一些什么问题呢？

保存后续节点。作为新手来说，很容易将当前节点的 `next`指针直接指向前一个节点，但其实当前节点`下一个节点`的指针也就丢失了。因此，需要在遍历的过程当中，先将下一个节点保存，然后再操作`next`指向。

链表结构声定义如下:

```
function ListNode(val) {  this.val = val;  this.next = null;}
```

实现如下:

```
/** * @param {ListNode} head * @return {ListNode} */let reverseList =  (head) => {    if (!head)        return null;    let pre = null, cur = head;    while (cur) {        // 关键: 保存下一个节点的值        let next = cur.next;        cur.next = pre;        pre = cur;        cur = next;    }    return pre;};
```

由于逻辑比较简单，代码直接一气呵成。不过仅仅写完还不够，对于链表问题，`边界检查`的习惯能帮助我们进一步保证代码的质量。具体来说:

- 当 head 节点为空时，我们已经处理，通过✅

- 当链表只包含`一个节点`时, 此时我们希望直接返回这个节点，对上述代码而言，进入循环后 `pre` 被赋值为`cur`，也就是`head`，没毛病，通过✅

运行在 LeetCode, 成功 AC ✌

但作为系统性的训练而言，单单让程序通过未免太草率了，我们后续会尽可能地用不同的方式去解决相同的问题，达到`融会贯通`的效果，也是对自己思路的开拓，有时候或许能达到`更优解`。

#### 递归解决方案

由于之前的思路已经介绍得非常清楚了，因此在这我们贴上代码，大家好好体会：

```
let reverseList = (head) =>{  let reverse = (pre, cur) => {    if(!cur) return pre;    // 保存 next 节点    let next = cur.next;    cur.next = pre;    return reverse(cur, next);  }  return reverse(null, head);}
```

### No.2 区间反转

反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

**说明:**1 ≤ m ≤ n ≤ 链表长度。

**示例:**

```
输入: 1->2->3->4->5->NULL, m = 2, n = 4输出: 1->4->3->2->5->NULL
```

来源: LeetCode 第 92 题

#### 思路

这一题相比上一个整个链表反转的题，其实是`换汤不换药`。我们依然有两种类型的解法：**循环解法**和**递归解法**。

需要注意的问题就是`前后节点`的保存(或者记录)，什么意思呢？看这张图你就明白了。

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)

关于前节点和后节点的定义，大家在图上应该能看的比较清楚了，后面会经常用到。

反转操作上一题已经拆解过，这里不再赘述。值得注意的是反转后的工作，那么对于整个区间反转后的工作，其实就是一个`移花接木`的过程，首先将**前节点**的 next 指向区间终点，然后将区间起点的 next 指向**后节点**。因此这一题中有四个需要重视的节点: `前节点`、`后节点`、`区间起点`和`区间终点`。接下来我们开始实际的编码操作。

#### 循环解法

```
/** * @param {ListNode} head * @param {number} m * @param {number} n * @return {ListNode} */var reverseBetween = function(head, m, n) {    let count = n - m;    let p = dummyHead = new ListNode();    let pre, cur, start, tail;    p.next = head;    for(let i = 0; i < m - 1; i ++) {        p = p.next;    }    // 保存前节点    front = p;    // 同时保存区间首节点    pre = tail = p.next;    cur = pre.next;    // 区间反转    for(let i = 0; i < count; i++) {        let next = cur.next;        cur.next = pre;        pre = cur;        cur = next;    }    // 前节点的 next 指向区间末尾    front.next = pre;    // 区间首节点的 next 指向后节点(循环完后的cur就是区间后面第一个节点，即后节点)    tail.next = cur;    return dummyHead.next;};
```

#### 递归解法

对于递归解法，唯一的不同就在于对于区间的处理，采用递归程序进行处理，大家也可以趁着复习一下递归反转的实现。

```
var reverseBetween = function(head, m, n) {  // 递归反转函数  let reverse = (pre, cur) => {    if(!cur) return pre;    // 保存 next 节点    let next = cur.next;    cur.next = pre;    return reverse(cur, next);  }  let p = dummyHead = new ListNode();  dummyHead.next = head;  let start, end; //区间首尾节点  let front, tail; //前节点和后节点  for(let i = 0; i < m - 1; i++) {    p = p.next;  }  front = p; //保存前节点  start = front.next;  for(let i = m - 1; i < n; i++) {    p = p.next;  }  end = p;  tail = end.next; //保存后节点  end.next = null;  // 开始穿针引线啦，前节点指向区间首，区间首指向后节点  front.next = reverse(null, start);  start.next = tail;  return dummyHead.next;}
```

### No.3 两个一组翻转链表

给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

来源: LeetCode 第 24 题

**示例:**

```
给定 1->2->3->4, 你应该返回 2->1->4->3.
```

#### 思路

如图所示，我们首先建立一个虚拟头节点(dummyHead)，辅助我们分析。

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)

首先让 p 处在 dummyHead 的位置，记录下 p.next 和 p.next.next 的节点，也就是 node1 和 node2。

随后让 **node1.next = node2.next**, 效果:

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)

然后让 **node2.next = node1**, 效果:

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)

最后，**dummyHead.next = node2**，本次翻转完成。同时 p 指针指向node1, 效果如下：

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)

依此循环，如果 `p.next` 或者 `p.next.next` 为空，也就是`找不到新的一组节点`了，循环结束。

#### 循环解决

思路清楚了，其实实现还是比较容易的，代码如下:

```
var swapPairs = function(head) {    if(head == null || head.next == null)         return head;    let dummyHead = p = new ListNode();    let node1, node2;    dummyHead.next = head;    while((node1 = p.next) && (node2 = p.next.next)) {        node1.next = node2.next;        node2.next = node1;        p.next = node2;        p = node1;    }    return dummyHead.next;};
```

#### 递归方式

```
var swapPairs = function(head) {    if(head == null || head.next == null)        return head;    let node1 = head, node2 = head.next;    node1.next = swapPairs(node2.next);    node2.next = node1;    return node2;};
```

利用递归方式之后，是不是感觉代码特别简洁？😃😃😃

希望你能好好体会一下递归调用的过程，相信理解之后对自己是一个很大的提升。

### No.4 K个一组翻转链表

给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。

k 是一个正整数，它的值小于或等于链表的长度。

如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

示例 :

```
给定这个链表：1->2->3->4->5当 k = 2 时，应当返回: 2->1->4->3->5当 k = 3 时，应当返回: 3->2->1->4->5
```

说明 :

- 你的算法只能使用常数的额外空间。

- 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

来源: LeetCode 第 25 题

#### 思路

思路类似**No.3**中的两个一组翻转。唯一的不同在于两个一组的情况下每一组只需要反转两个节点，而在 K 个一组的情况下对应的操作是将 `K 个元素`的链表进行反转。

#### 递归解法

这一题我觉得递归的解法更容易理解，因此，先贴上递归方法的代码。

```
以下代码的注释中`首节点`、`尾结点`等概念都是针对反转前的链表而言的。
```

```
/** * @param {ListNode} head * @param {number} k * @return {ListNode} */var reverseKGroup = function(head, k) {    let pre = null, cur = head;    let p = head;    // 下面的循环用来检查后面的元素是否能组成一组    for(let i = 0; i < k; i++) {        if(p == null) return head;        p = p.next;    }    for(let i = 0; i < k; i++){        let next = cur.next;        cur.next = pre;        pre = cur;        cur = next;    }    // pre为本组最后一个节点，cur为下一组的起点    head.next = reverseKGroup(cur, k);    return pre;};
```

#### 循环解法

重点都放在注释里面了。

```
var reverseKGroup = function(head, k) {    let count = 0;    // 看是否能构成一组，同时统计链表元素个数    for(let p = head; p != null; p = p.next) {        if(p == null && i < k) return head;        count++;    }    let loopCount = Math.floor(count / k);    let p = dummyHead = new ListNode();    dummyHead.next = head;    // 分成了 loopCount 组，对每一个组进行反转    for(let i = 0; i < loopCount; i++) {        let pre = null, cur = p.next;        for(let j = 0; j < k; j++) {            let next = cur.next;            cur.next = pre;            pre = cur;            cur = next;        }        // 当前 pre 为该组的尾结点，cur 为下一组首节点        let start = p.next;// start 是该组首节点        // 开始穿针引线！思路和2个一组的情况一模一样        p.next = pre;        start.next = cur;        p = start;    }    return dummyHead.next;};
```

## 环形链表

### No.1 如何检测链表形成环？

给定一个链表，判断链表中是否形成环。

#### 思路

思路一: 循环一遍，用 Set 数据结构保存节点，利用节点的内存地址来进行判重，如果同样的节点走过两次，则表明已经形成了环。

思路二: 利用快慢指针，快指针一次走两步，慢指针一次走一步，如果`两者相遇`，则表明已经形成了环。

可能你会纳闷，为什么思路二用两个指针在环中一定会相遇呢？

其实很简单，如果有环，两者一定同时走到环中，那么在环中，**选慢指针为参考系**，快指针每次`相对参考系`向前走一步，终究会绕回原点，也就是回到慢指针的位置，从而让两者相遇。如果没有环，则两者的相对距离越来越远，永远不会相遇。

接下来我们来编程实现。

#### 方法一: Set 判重

```
/** * @param {ListNode} head * @return {boolean} */var hasCycle = (head) => {    let set = new Set();    let p = head;    while(p) {        // 同一个节点再次碰到，表示有环        if(set.has(p)) return true;        set.add(p);        p = p.next;    }    return false;}
```

#### 方法二: 快慢指针

```
var hasCycle = function(head) {    let dummyHead = new ListNode();    dummyHead.next = head;    let fast = slow = dummyHead;    // 零个结点或者一个结点，肯定无环    if(fast.next == null || fast.next.next == null)         return false;    while(fast && fast.next) {        fast = fast.next.next;        slow = slow.next;        // 两者相遇了        if(fast == slow) {            return true;        }    }     return false;};
```

### No.2 如何找到环的起点

给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

\*\*说明：\*\*不允许修改给定的链表。

#### 思路分析

刚刚已经判断了如何判断出现环，那如何找到环的节点呢？我们来分析一波。

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)

看上去比较繁琐，我们把它做进一步的抽象:

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)

设快慢指针走了`x`秒，慢指针一秒走一次。

对快指针，有: **2x - L = m \* S + Y** -----①

对慢指针，有: **x -  L = n \* S + Y** -----②

其中，m、n 均为自然数。

① - ② \* 2 得:

**L = (m - n) \* S - Y**\-----③

好，这是一个非常重要的等式。我们现在假设有一个新的指针在 L 段的最左端，慢指针现在还在相遇处。

让`新指针`和`慢指针`都每次走一步，那么，当`新指针`走了 L 步之后**到达环起点**，而与此同时，我们看看`慢指针情况如何`。

由③式，慢指针走了`(m - n) * S - Y`个单位，以环起点为参照物，相遇时的位置为 Y，而现在由`Y + (m - n) * S - Y`即`(m - n) * S`，得知慢指针实际上参照环起点，走了整整(m - n)圈。也就是说，**慢指针此时也到达了环起点**。:::tip 结论 现在的解法就很清晰了，当快慢指针相遇之后，让新指针从头出发，和慢指针同时前进，且每次前进一步，两者相遇的地方，就是**环起点**。:::

#### 编程实现

懂得原理之后，实现起来就容易很多了。

```
/** * @param {ListNode} head * @return {ListNode} */var detectCycle = function(head) {    let dummyHead = new ListNode();    dummyHead.next = head;    let fast = slow = dummyHead;    // 零个结点或者一个结点，肯定无环    if(fast.next == null || fast.next.next == null)         return null;    while(fast && fast.next) {        fast = fast.next.next;        slow = slow.next;        // 两者相遇了        if(fast == slow) {           let p = dummyHead;           while(p != slow) {               p = p.next;               slow = slow.next;           }           return p;        }    }     return null;};
```

## 链表合并

### No.1 合并两个有序链表

将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

**示例:**

```
输入：1->2->4, 1->3->4输出：1->1->2->3->4->4
```

来源: LeetCode第21题

#### 递归解法

递归解法更容易理解，我们先用递归来做一下:

```
/** * @param {ListNode} l1 * @param {ListNode} l2 * @return {ListNode} */var mergeTwoLists = function(l1, l2) {    const merge = (l1, l2) => {        if(l1 == null) return l2;        if(l2 == null) return l1;        if(l1.val > l2.val) {            l2.next = merge(l1, l2.next);            return l2;        }else {            l1.next = merge(l1.next, l2);            return l1;        }    }    return merge(l1, l2);};
```

#### 循环解法

```
var mergeTwoLists = function(l1, l2) {    if(l1 == null) return l2;    if(l2 == null) return l1;    let p = dummyHead = new ListNode();    let p1 = l1, p2 = l2;    while(p1 && p2) {        if(p1.val > p2.val) {            p.next = p2;            p = p.next;            p2 = p2.next;        }else {            p.next = p1;            p = p.next;            p1 = p1.next;        }    }    // 循环完成后务必检查剩下的部分    if(p1) p.next = p1;    else p.next = p2;    return dummyHead.next;};
```

### No.2 合并 K 个有序链表

合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

**示例:**

```
输入:[  1->4->5,  1->3->4,  2->6]输出: 1->1->2->3->4->4->5->6
```

来源: LeetCode第23题

#### 自上而下(递归)实现

```
/** * @param {ListNode[]} lists * @return {ListNode} */var mergeKLists = function(lists) {    // 上面已经实现    var mergeTwoLists = function(l1, l2) {/*上面已经实现*/};    const _mergeLists = (lists, start, end) => {        if(end - start < 0) return null;        if(end - start == 0)return lists[end];        let mid = Math.floor(start + (end - start) / 2);        return mergeTwoList(_mergeLists(lists, start, mid), _mergeLists(lists, mid + 1, end));    }    return _mergeLists(lists, 0, lists.length - 1);};
```

#### 自下而上实现

在这里需要提醒大家的是，在自下而上的实现方式中，我为每一个链表绑定了一个虚拟头指针(dummyHead)，为什么这么做？

这是为了方便链表的合并，比如 l1 和 l2 合并之后，合并后链表的头指针就直接是 l1 的 dummyHead.next 值，等于说两个链表都合并到了 l1 当中，方便了后续的合并操作。

```
var mergeKLists = function(lists) {    var mergeTwoLists = function(l1, l2) {/*上面已经实现*/};    // 边界情况    if(!lists || !lists.length) return null;    // 虚拟头指针集合    let dummyHeads = [];    // 初始化虚拟头指针    for(let i = 0; i < lists.length; i++) {        let node = new ListNode();        node.next = lists[i];        dummyHeads[i] = node;    }    // 自底向上进行merge    for(let size = 1; size < lists.length; size += size){        for(let i = 0; i + size < lists.length;i += 2 * size) {            dummyHeads[i].next = mergeTwoLists(dummyHeads[i].next, dummyHeads[i + size].next);        }    }    return dummyHeads[0].next;};
```

多个链表的合并到这里就实现完成了，在这里顺便告诉你这种归并的方式同时也是**对链表进行归并排序的核心代码**。希望你能好好体会**自上而下**和**自下而上**两种不同的实现细节，相信对你的编程内功是一个不错的提升。

## 求链表中间节点

### 判断回文链表

请判断一个单链表是否为回文链表。

**示例1:**

```
输入: 1->2输出: false
```

**示例2:**

```
输入: 1->2->2->1输出: true
```

你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？

来源: LeetCode第234题

#### 思路分析

这一题如果不考虑性能的限制，其实是非常简单的。但考虑到 O(n) 时间复杂度和 O(1) 空间复杂度，恐怕就值得停下来好好想想了。

题目的要求是单链表，没有办法访问前面的节点，那我们只得另辟蹊径:

找到链表中点，然后将后半部分反转，就可以依次比较得出结论了。下面我们来实现一波。

#### 代码实现

其实关键部分的代码就是找中点了。先亮剑:

```
  let dummyHead = slow = fast = new ListNode();  dummyHead.next = head;  // 注意注意，来找中点了  while(fast && fast.next) {      slow = slow.next;      fast = fast.next.next;  }
```

你可能会纳闷了，为什么边界要设成这样？

我们不妨来分析一下，分链表节点个数为`奇数`和`偶数`的时候分别讨论。

- 当链表节点个数为奇数

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)

试着模拟一下， fast 为空的时候，停止循环, 状态如下:

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)

- 当链表节点个数为偶数

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)模拟走一遍，当 fast.next 为空的时候，停止循环，状态如下:

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)

对于 `fast 为空`和`fast.next为空`两个条件，在奇数的情况下，总是 `fast为空`先出现，偶数的情况下，总是`fast.next`先出现.

也就是说: 一旦`fast为空`, 链表节点个数一定为奇数，否则为偶数。因此两种情况可以合并来讨论，当 fast 为空或者 fast.next 为空，循环就可以终止了。

完整实现如下:

```
/** * @param {ListNode} head * @return {boolean} */var isPalindrome = function(head) {    let reverse = (pre, cur) => {        if(!cur) return pre;        let next = cur.next;        cur.next = pre;        return reverse(cur, next);    }    let dummyHead = slow = fast = new ListNode();    dummyHead.next = head;    // 注意注意，来找中点了, 黄金模板    while(fast && fast.next) {        slow = slow.next;        fast = fast.next.next;    }    let next = slow.next;    slow.next = null;    let newStart = reverse(null, next);    for(let p = head, newP = newStart; newP != null; p = p.next, newP = newP.next) {        if(p.val != newP.val) return false;    }    return true;};
```

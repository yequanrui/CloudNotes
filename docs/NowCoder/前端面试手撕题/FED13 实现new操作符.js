const _new = function (constructor, ...args) {
    // new关键字做了4件事
    // 1. 创建一个新对象
    const obj = {};
    // 2. 为新对象添加属性__proto__，将该属性链接至构造函数的原型对象
    obj.__proto__ = constructor.prototype;
    // 3. 执行构造函数，this被绑定在新对象上
    const res = constructor.apply(obj, args);
    // 4. 确保返回一个对象
    return res instanceof Object ? res : obj;
};

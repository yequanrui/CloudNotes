function Human(name) {
    this.name = name;
    this.kingdom = 'animal';
    this.color = ['yellow', 'white', 'brown', 'black'];
}

Human.prototype.getName = function () {
    return this.name;
};

// ————————核心代码————————
// ↓↓↓↓
function Chinese(name, age) {
    Human.call(this, name);
    this.color = 'yellow';
    this.age = age;
}

const prototype = Object.create(Human.prototype);
prototype.constructor = Chinese;
Chinese.prototype = prototype;
// ↑↑↑↑
// ————————核心代码————————

Chinese.prototype.getAge = function () {
    return this.age;
};

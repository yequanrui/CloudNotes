class Human {
    constructor(name) {
        this.name = name;
        this.kingdom = 'animal';
        this.color = ['yellow', 'white', 'brown', 'black'];
    }
    getName() {
        return this.name;
    }
}

// 补全代码
class Chinese extends Human {
    constructor(name, age) {
        super(name);
        this.age = age;
    }

    getAge() {
        return this.age;
    }
}

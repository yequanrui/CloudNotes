class EventEmitter {
    constructor() {
        this.map = {};
    }

    on(type, callBack) {
        if (!this.map[type]) this.map[type] = [];
        this.map[type].push(callBack);
    }
    emit(type, ...args) {
        this.map[type] && this.map[type].forEach(fn => fn(...args));
    }
}

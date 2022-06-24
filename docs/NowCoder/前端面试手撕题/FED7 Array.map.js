Array.prototype._map = function (fn) {
    const res = [];
    const len = this.length;
    for (let i = 0; i < len; i++) {
        res.push(fn(this[i]));
    }
    return res;
};

console.log([1, 2]._map(i => i * 2));

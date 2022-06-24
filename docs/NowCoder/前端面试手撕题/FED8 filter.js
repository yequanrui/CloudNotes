Array.prototype._filter = function (fn) {
    const res = [];
    for (const item of this) {
        if (fn(item)) res.push(item);
    }
    return res;
};

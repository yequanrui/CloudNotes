Function.prototype._call = function (obj, ...args) {
    const context = obj ? obj : global;
    context.fn = this;
    const res = context.fn(...args);
    delete context.fn;
    return res;
};

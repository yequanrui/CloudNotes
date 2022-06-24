Function.prototype._bind = function (obj, ...args) {
    return (...rest) => this.call(obj, ...args, ...rest);
};

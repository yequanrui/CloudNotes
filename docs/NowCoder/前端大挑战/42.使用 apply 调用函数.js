function callIt(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return fn.apply(null, args);
}

function curryIt(fn) {
    return function a(a) {
        return function b(b) {
            return function c(c) {
                return fn.call(this, a, b, c);
            };
        };
    };
}

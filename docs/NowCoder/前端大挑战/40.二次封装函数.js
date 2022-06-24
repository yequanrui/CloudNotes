function partial(fn, str1, str2) {
    const result = str3 => {
        return fn.call(this, str1, str2, str3);
    };
    return result;
}

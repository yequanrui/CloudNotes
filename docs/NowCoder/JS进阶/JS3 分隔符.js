function _comma(number) {
    const str = `${number}`;
    const res = [];
    const len = str.length;
    let count = 0;
    for (let i = len - 1; i >= 0; i--) {
        res.unshift(str[i]);
        count++;
        if (!(count % 3) && str[i - 1] !== '-' && i > 0) {
            res.unshift(',');
        }
    }
    return res.join('');
}

console.log(_comma(-12345678));

const count = str => {
    const map = {};
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            map[str[i]] = map[str[i]] ? map[str[i]] + 1 : 1;
        }
    }
    return map;
};

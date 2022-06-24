const _permute = string => {
    const search = path => {
        if (path.length === string.length) {
            res.push(path);
            return;
        }
        for (const char of string) {
            if (path.indexOf(char) < 0) {
                search(`${path}${char}`);
            }
        }
    };
    const res = [];
    search('');
    return res;
};

console.log(_permute('abc'));

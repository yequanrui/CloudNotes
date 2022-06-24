const _getUniqueNums = (start, end, n) => {
    const getRandomNum = (start, end) => start + Math.floor((end - start + 1) * Math.random());
    const res = [];
    for (let i = 0; i < n; i++) {
        res.push(getRandomNum(start, end));
    }
    return res;
};

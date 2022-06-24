const insert = (arr, item, index) => {
    const res = arr.slice(0);
    res.splice(index, 0, item);
    return res;
};

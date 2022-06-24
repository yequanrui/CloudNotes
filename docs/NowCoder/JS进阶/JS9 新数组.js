const _delete = (array, index) => {
    const res = [];
    for (let i = 0; i < array.length; i++) {
        if (i === index) continue;
        res.push(array[i]);
    }
    return res;
};

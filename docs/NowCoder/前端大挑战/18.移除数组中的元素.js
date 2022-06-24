const remove = (arr, item) => {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== item) res.push(arr[i]);
    }
    return res;
};

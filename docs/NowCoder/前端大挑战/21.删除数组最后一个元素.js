function truncate(arr) {
    const res = [];
    for (let i = 0; i < arr.length - 1; i++) {
        res.push(arr[i]);
    }
    return res;
}

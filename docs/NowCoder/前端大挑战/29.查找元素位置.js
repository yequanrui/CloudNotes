function findAllOccurrences(arr, target) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            res.push(i);
        }
    }
    return res;
}

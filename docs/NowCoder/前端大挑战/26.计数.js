function count(arr, item) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) count++;
    }
    return count;
}

function removeWithoutCopy(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            arr.splice(i--, 1);
        }
    }
    return arr;
}

console.log(removeWithoutCopy([1, 2, 2, 3, 4, 2, 2], 2));

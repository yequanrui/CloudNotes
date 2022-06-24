function duplicates(arr) {
    // 定义哈希表
    const map = {};
    // 要返回的数组
    const res = [];
    // 遍历数组，将每个元素出现的次数放入map
    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] = map[arr[i]] ? map[arr[i]] + 1 : 1;
    }
    // 数组去重
    arr = [...new Set(arr)];
    // 遍历去重后的数组
    for (let i = 0; i < arr.length; i++) {
        // 如果发现元素出现的次数大于1，将其放入res
        if (map[arr[i]] > 1) {
            res.push(arr[i]);
        }
    }
    return res;
}

console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]));

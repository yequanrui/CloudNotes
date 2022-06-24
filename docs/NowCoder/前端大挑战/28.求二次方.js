function square(arr) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i] * arr[i]);
    }
    return res;
}

console.log(square([1, 2, 3, 4]));

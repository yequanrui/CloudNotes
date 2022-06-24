const _quickSort = nums => {
    if (nums.length <= 1) return nums;
    const mid = nums[0];
    const [left, right] = [[], []];
    const len = nums.length;
    for (let i = 1; i < len; i++) {
        if (nums[i] < mid) {
            left.push(nums[i]);
        } else {
            right.push(nums[i]);
        }
    }
    return [..._quickSort(left), mid, ..._quickSort(right)];
};

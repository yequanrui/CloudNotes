const _shouldUpdate = (oldVersion, newVersion) => {
    const oldArr = oldVersion.split('.');
    const newArr = newVersion.split('.');
    let [i, j] = [0, 0];
    while (i < oldArr.length || j < newArr.length) {
        const oldNum = Number(oldArr[i] || 0);
        const newNum = Number(newArr[i] || 0);
        if (newNum > oldNum) return true;
        if (oldNum > newNum) return false;
        i++;
        j++;
    }
    return false;
};

console.log(_shouldUpdate('1.0', '1.0.1'));

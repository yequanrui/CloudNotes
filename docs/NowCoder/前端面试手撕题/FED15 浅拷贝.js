const _shallowClone = target => {
    const obj = {};
    for (const key in target) {
        if (target.hasOwnProperty(key)) {
            obj[key] = target[key];
        }
    }
    return obj;
};

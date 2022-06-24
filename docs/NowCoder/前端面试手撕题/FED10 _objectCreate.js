const _objectCreate = proto => {
    const obj = {};
    obj.__proto__ = proto;
    return obj;
};

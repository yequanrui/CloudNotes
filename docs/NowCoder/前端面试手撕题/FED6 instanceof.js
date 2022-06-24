const _instanceof = (target, Fn) => {
    let implicit = target.__proto__;
    const display = Fn.prototype;
    while (implicit) {
        if (implicit === display) return true;
        implicit = implicit.__proto__;
    }
    return false;
};

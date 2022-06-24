const convertToBinary = num => {
    let str = num.toString(2);
    while (str.length < 8) {
        str = '0' + str;
    }
    return str;
};

const _getExFilename = filename => {
    const arr = filename.split('.');
    return `.${arr[arr.length - 1]}`;
};

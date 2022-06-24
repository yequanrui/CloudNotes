function captureThreeNumbers(str) {
    const res = str.match(/\d{3}/);
    return res ? res[0] : false;
}

function cssStyle2DomStyle(sName) {
    if (sName[0] === '-') sName = sName.slice(1);
    const res = sName.split('');
    for (let i = 0; i < res.length; i++) {
        if (res[i] === '-') {
            res.splice(i, 1);
            res[i] = res[i].toUpperCase();
        }
    }
    return res.join('');
}

console.log(cssStyle2DomStyle('-webkit-border-image'));

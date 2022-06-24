function getUrlParam(sUrl, sKey) {
    let arr = sUrl.split('?')[1].split('#')[0].split('&');
    let res = sKey ? [] : {};
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        const [key, value] = arr[i].split('=');
        if (sKey) {
            if (key === sKey) res.push(value);
        } else {
            if (!res[key]) res[key] = [];
            res[key].push(value);
        }
    }
    if (sKey) {
        if (res.length <= 1) res = res[0] || '';
    } else {
        Object.keys(res).forEach(key => {
            if (res[key].length <= 1) res[key] = res[key][0] || '';
        });
    }
    return res;
}

const sUrl = 'http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe';
const sKey = 'abc';
console.log(getUrlParam(sUrl, sKey));

const _getParams = url => {
    const arr = url.split('?')[1].split('&');
    const obj = {};
    arr.forEach(item => {
        const [key, value] = item.split('=');
        obj[key] = value;
    });
    return obj;
};

_getParams('https://nowcoder.com/online?id=1&salas=1000');

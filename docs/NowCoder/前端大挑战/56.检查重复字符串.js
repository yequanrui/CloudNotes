const containsRepeatingLetter = str => {
    // 判断是否是字母的函数
    const isLetter = s =>
        (s.charCodeAt() >= 65 && s.charCodeAt() <= 90) ||
        (s.charCodeAt() >= 97 && s.charCodeAt() <= 122);

    for (let i = 1; i < str.length; i++) {
        // 两个都是字母 且 两个相等
        if (isLetter(str[i]) && isLetter(str[i - 1]) && str[i] === str[i - 1]) return true;
    }
    return false;
};

// 正则表达式
// const containsRepeatingLetter = str => /([a-zA-Z])\1/.test(str);

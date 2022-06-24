const strLength = (s, bUnicode255For1) => {
    if (bUnicode255For1) {
        return s.length;
    } else {
        let count = 0;
        for (let i = 0; i < s.length; i++) {
            if (s.charCodeAt(i) > 255) {
                count += 2;
            } else {
                count++;
            }
        }
        return count;
    }
};

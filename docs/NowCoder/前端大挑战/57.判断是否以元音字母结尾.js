function endsWithVowel(str) {
    const arr = ['a', 'e', 'i', 'o', 'u'];
    const len = str.length;
    return arr.indexOf(str.toLowerCase()[len - 1]) === -1 ? false : true;
}

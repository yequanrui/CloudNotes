const _rank = array =>
    array.sort((a, b) => b.chinese + b.math + b.english - (a.chinese + a.math + a.english));

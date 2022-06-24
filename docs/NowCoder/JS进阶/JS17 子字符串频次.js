const _searchStrIndexOf = (str, target) => str.match(new RegExp(target, 'g')).length;

_searchStrIndexOf('asfgdashjkhashuihas', 'as');

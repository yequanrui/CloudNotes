const closure = () => {
    let count = 1;
    return () => count++;
};

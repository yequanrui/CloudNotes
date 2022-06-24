function createModule(str1, str2) {
    return {
        greeting: str1,
        name: str2,
        sayIt: function () {
            return `${this.greeting},${this.name}`;
        },
    };
}

var Hello = (function () {
    var testing = function () {
        return "Hello, testing!";
    };

    return {
        testing: testing
    };
})();

module.exports = Hello;
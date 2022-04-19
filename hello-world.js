function greet(message) {
    console.log(message);
}
greet('Hello world');
/**
 * 一個函式的定義，可以有 3 個表示方式
 */
function isPositive(input) {
    return input > 0;
}
var anotherIsPositive = function (input) { return input > 0; };
var anotherIsPositive2 = function (input) {
    return input > 0;
};
/* IIFE */
var a = (function () {
    return 1;
})();

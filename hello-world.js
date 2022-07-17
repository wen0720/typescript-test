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
// ========= 斷言 ========== //
/* IIFE */
// 斷言方式 1
(function () {
    return 1;
})();
/* IIFE */
// 斷言方式 2
((function () {
    return 1;
})());
/* 運算表達式 */
var foo = 2;
(1 + foo * 2);
(1 + foo * 2);
/* 100% 積極註記：算是錯誤示範 */
var something = 123;
function addSomething(x) {
    return (x + something);
}
var result = addSomething(11);
// 列舉
var Color;
(function (Color) {
    Color[Color["Yellow"] = 0] = "Yellow";
})(Color || (Color = {}));
var baz = Color.Yellow;
console.log(baz);

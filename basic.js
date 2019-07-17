"use strict";
exports.__esModule = true;
// 1基本註解
var num1 = 10;
function identity(num) {
    return num;
}
// 2原始類型
var num2;
var string2;
var true2;
// 3數組
var booleanArr;
booleanArr = [true, false];
var name = {
    firstName: 'Tim',
    lastName: 'Chen'
};
// 若最上方沒有import axios，變數name就會因為重複宣告而報錯
// 重複宣告的原因是 typescript在全域的window中，已宣告name這個變數
// 且預設ts文件所有變數都是處於全域的，因此會重複宣告
// 但當文件有任何模塊的引用時（import，需處於文件根層次），
// 宣告的變數，就不在屬於全域
// 特殊類型
// any(基本上就是叫typescript不要進行任何類型檢查)    
var power;
power = 5; // 可以賦值任意其他類型
var test = power; // 也可以被賦值
// null / undefined
// void 表示一個函數沒有返回的值
// 泛型
function reserve(arr) {
    var tempArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        tempArr.push(arr[i]);
    }
    return tempArr;
}
var reserveArr = reserve([1, 2, 3]);
console.log(reserveArr);

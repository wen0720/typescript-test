var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
    return Student;
}());
function greeterFuc(person) {
    return "Hello, " + person.firstName + person.lastName;
}
var user = new Student('Chen', 'Wen', 'Shian');
// document.body.innerHTML = greeterFuc(user);
//=================//
// Array
var list = [1, 2, 3];
var list2 = [1, 2, 3];
// number
var decimal = 6;
var hex = 0xf00d;
var binary = 10; // binary 2進位
var octal = 484; // octal 10進位
// boolean
var isDone;
isDone = false;
var x = 100;
var myFavoriteNumber; // 可以是string 或 number類型
var person = {
    id: 5,
    name: 'ton',
    age: 17,
    gender: 'boy',
    love: null
};
var fibonacci = [1, 1, 2, 3, 5];
var arr = [1, 2, 3, 4, 5];
var txtNumArr = [1, '2', 3, '5', 9];
function reverse(arr) {
    var toreturn = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        toreturn.push(arr[i]);
    }
    return toreturn;
}
var testArr = reverse([1, 2, 3]);
console.log(testArr);
console.log(testArr[0]);
var Utility;
(function (Utility) {
    function bark() {
        console.log('bark!!!!!');
    }
    Utility.bark = bark;
    function stop() {
        console.log('stop');
    }
})(Utility || (Utility = {}));
Utility.bark();
console.log(Utility);
// 這樣會強制陣列只能有 2 個元素
var tuple;
tuple = ['xxxx', 6];
console.log(tuple[0]);
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
console.log(Color)

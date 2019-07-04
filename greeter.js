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
document.body.innerHTML = greeterFuc(user);
//==============    ===//
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

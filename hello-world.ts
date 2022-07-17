function greet(message: string) {
  console.log(message);
}

greet('Hello world');


/**
 * 一個函式的定義，可以有 3 個表示方式
 */
function isPositive(input: number): boolean {
  return input > 0;
}
const anotherIsPositive: (input: number) => boolean = (input) => input > 0;
const anotherIsPositive2 = function(input: number): boolean {
  return input > 0;
};

// ========= 斷言 ========== //
/* IIFE */
// 斷言方式 1
(function() {
  return 1;
})() as number;

/* IIFE */
// 斷言方式 2
<number>((function() {
  return 1;
})());

/* 運算表達式 */
const foo = 2;
(1 + foo * 2) as number;
<number>(1 + foo * 2);


/* 100% 積極註記：算是錯誤示範 */
let something: number = 123;
function addSomething(x: number): number {
  return (x + something) as number;
}
const result: number = addSomething(11) as number;

// 列舉
enum Color { Yellow }
const baz: Color = Color.Yellow;
console.log(baz);


// 型別推論的機制
// hover 過去就會發現，typescript 會自己判斷可能的型別，如果會傳的結果確定，甚至會直接顯示回傳結果(number | '123')
const whatIsThis = (Math.random() > 0.5) ? Math.random() * 100 : '123';


// 延遲性指派
let a;
console.log(a); // 此時 a 是 undefined，typescript 也會判斷是 undefined
a = 123;

let b: number | undefined;
console.log(b); // 如果不給 b undefined 的型別，就會報錯
b = 345;

type info = {
  text: string | undefined; // 實際上用 , 或 ; 都可以
  des: string;
  score: number;
}

const myInfo: info = {
  text: '',
  des: '',
  score: 20,
}

// myInfo.gg = 10; // 此操作會報錯，因為物件 key 已被定義
delete myInfo.text // 這是因為上面有被定義可以是 undefined，才會過

// 在沒有被定義型別的情況下，typescript 會做型別推論，此時在賦予不存在的屬性，會報錯
// let testObj = {
//   name: '',
// }
// testObj.hh = 10;
// delete testObj.name2;
// testObj.name = 2; // 應該要是字串型別


const conference = {
  name: 'new',
  year: 2020,
}

// 直接以 conference 這個物件去推導型別
type conference = typeof conference;

const mopcon: conference = {
  name: 'mopcon',
  year: 2022,
}

const array: Array<any> = [];

type animal = {
  readonly name: string;
}

const cat: animal = {
  name: 'right',
}
// 無法 reassign 值，因為是 readonly
cat.name = 'left';

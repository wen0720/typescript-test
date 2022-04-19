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

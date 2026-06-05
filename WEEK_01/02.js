// 데이터 타입
// runtime 시 결정
// 코드를 작성할 때가 아니라, 실제 코드가 실행될 때
// -> 옆에 터미널에 코드가 실행될 떄
// 그 때, 데이터 타입이 결정된다.
// java : String str = "abc";
// js : const a = "abc";

// Number
// Integer
let num1 = 10;
console.log(num1);
console.log(typeof num1);

// Float
let num2 = 3.14;
console.log(num2);
console.log(typeof num2);

// Exp
let num3 = 2.5e5;
console.log(num3);
console.log(typeof num3);

// Nan = Not a Number
let num4 = "Hello" / 2;
console.log(num4);

// signed Infinity
let num5 = 1 / 0;
console.log(num5);
console.log(typeof num5);

let num6 = -1 / 0;
console.log(num6);
console.log(typeof num6);


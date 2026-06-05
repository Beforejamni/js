//형 변환
// 형태 -> 바꾼다
// 명시적 형 변환. 암시적 형 변환

// 암시적
// String
let res1 = 1 + "2";
console.log(res1);
console.log(typeof res1);

let res2 = "1" + true;
console.log(res2);
console.log(typeof res2);

// number
let res3 = 1 - "2";
console.log(res3);
console.log(typeof res3);

let res4 = "2" * "3";
console.log(res4);
console.log(typeof res4);

// 명시적 형 변환
// Boolean
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean("false")); // true
console.log(Boolean({})); // true

// String
console.log(typeof String(123)); // 123
console.log(typeof String(true)); // true
console.log(typeof String(false)); // false
console.log(typeof String(null)); // null
console.log(typeof String(undefined)); //undefined


// number
let res5 = Number("123");
console.log(res5);
console.log(typeof res5);
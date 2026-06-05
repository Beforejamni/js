// 연산자

// 더하기 연산자
console.log(1 + 1);

// 빼기 연산자
console.log(1 - 2);

// 곱하기 연산자
console.log(2 * 3);

// 나누기 연산자
console.log(4 / 2);

// 나머지 연산자
console.log(5 % 2);

// 할당 연산자(assignment)
// 등호 연산자
let res = 10;
console.log(res);

// 더하기 등호 연산자
res += 5;
console.log(res);
console.log(res++);
console.log(res);

// 빼기 등호 연산자
res -= 5;
console.log(res--);
console.log(res);

// 곱하기 등호 연산자
res = 10;
res *= 2;
console.log(res);

//비교 연산자
let big = 100;
let small = 10;
// 타입까지 일치해야 true를 반환하는 연산자
console.log(big === small);
console.log(big > small);
console.log(big < small);
console.log(big !== small);

//논리 연산자
// 논리곱 연산자
console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(false &&false);

// 논리합 연산자
console.log(true || true);
console.log(true || false);
console.log(false || false);
console.log(false || false);

// 논리 부정 연산자 
console.log(!true);

// 삼항 연산자
let flag = 2 > 3 ? true : false;
console.log(flag);
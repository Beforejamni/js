//변수, 상수
//변수: 메모리에 저장한다. 읽어들여서 재사용한다.

// 변수의 5가지 주요 개념
//변수 이름 : 정장도니 값의 고유 이름
//변수 값 : 변수에 저장된 값
//변수 할당 : 변수에 값을 저장하는 행위
//변수 선언 : 변수를 사용하기 위해 컴퓨터에 알리는 행위
//변수 참조 : 변수에 할당된 값을 읽어오는 것

//변수를 선언할 수 있는 3가지 방법 : var , let, const

// var
// Scope : 함수 레벨
//
var myVar = "Hello Var";
console.log(myVar);

// let
// Scope : 블록 레벨
let myLet = "Hello let";
console.log(myLet);

// const
// Scope : 블록 레벨
// Java의 final 상수
const myConst = "Hello const";
console.log(myConst);
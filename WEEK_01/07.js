// 함수 = function(기능)
// input, output

// 1. 함수 선언문
function fuc(paramter){
    //함수 내부에서 실행할 로직
}

// 덧셈 함수
function add1 (x , y){
    return x + y;
}


// 2. 함수 표현식
let add2 = function(x, y){
    return add1(x ,y);
}

//함수를 호출하는 방법(= 사용한다)
//함수() -> add(입력값)
let res = add(1, 2);
console.log(res);

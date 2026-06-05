// 스코프, 전역변수, 지역변수, 화살표 함수
let val = 10;
console.log(val);

function printVal(){
    let temp = 10;
    console.log(val);
    console.log(temp);
}

printVal();

// 화살표 함수 ES6 신문법
function add(x , y) {
    return x + y;
}

let arrowFunc01 = (x , y) => {
    return  x- y;
};

let arrowFunc02 = (x, y) => x + y;

function testFunc(x){
    return x*2;
}

let arrowFunc03 = x => x*2;
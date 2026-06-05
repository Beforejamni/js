//조건문
// if문
let x = 10;

if(x > 0){
    console.log("x는 양수입니다.");
}

let y = "Hello world";
let yLen = y.length;

if(yLen >= 5){
    console.log(yLen);
}

// if - else
x = -3;
if(x > 0){
    console.log("x는 양수입니다.");
}else{
    console.log("x는 양수가 아닙니다.");
}

//if - else if - else
let score = 90;
let grade;
if(score >= 90){
    grade = "A";
}else if(score >= 80){
    grade = "B"
}else if(score >= 70){
    grade = "C"
}else{
    grade = "F"
}
console.log(grade);

//switch / default
let fruit = "apple";

switch(fruit){
    case "apple":
        console.log("사과입니다.");
        break;
    case "banana":
        console.log("바나나입니다.");
        break;
    case "kiwi":
        console.log("키위입니다.");
        break;
    default:
        console.log("해당 카테고리에 존재하지 않습니다.");
        
}
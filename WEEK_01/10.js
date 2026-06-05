//조건문의 중첩
let age = 20;
let gender = "여성";

if(age > 18){
    if(gender === "여성"){
        
    }else{

    }
}else{
    if(gender === "여성"){

    }else{

    }
}

//조건문의 실행
true && console.log("실화입니다.");

let y;
let z = y || 20;
console.log(z);

//false 값, true한 값
if(0){ console.log(0)};
if(""){  console.log(" ")  };
if(null){  console.log(null)  };
if(undefined){  console.log(undefined)  };
if(NaN){  console.log(NaN)  };
if(false){  console.log(false) };
if(true){  console.log(true)  };
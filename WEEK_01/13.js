//반복문

for(let i = 0; i < 10; i++) {   
    console.log("FOR : " , i);
}

const arr = [1, 2, 3, 4 ,5];
for(let i = 0; i < arr.length ; i++){
    console.log("arr[", i , "] => " , arr[i]);
}

// ex: 0부터 10까지의 수 중에서 2의 배수만 console.log로 출력하는 예시
for(let i = 1; i <= 10; i++){
    if(i % 2 === 0 ){
        console.log(i);
    }
}

// for ~ in문
// 객체의 속성을 출력하는문법
let person = {
    name: "John",
    age : 30,
    gender : "male"
};


for(let key in person){
    console.log(key + " : " + person[key]);
}

//while
let i = 0;
let cnt = 0;
while(i < 10){
    console.log(i);
    i++;
    cnt++;
}
console.log("---------");
console.log(cnt);

// while문을 활용해서. 3초과 100미안의 숫자 중 5의 배수인 것만 출력하는 예
 i = 0;
 while(i < 100){
    i++;

    if(i < 3) continue;

    if(i % 5 == 0){
        console.log(i , "는 5의 배수입니다.");
    }
}

i = 0;
do{
    i++;

    if(i < 3) continue;

    if(i % 5 === 0) console.log(i, "는 5의 배수입니다.");

}while(i < 100)

for( i=0; i<10; i++){
    
    if(i === 3)
        continue;
    

    if(i === 5){
        break;
    }
    console.log(i);
}

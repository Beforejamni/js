//String
let str = "Hello World!";
console.log(str);
console.log(typeof str);

//문자열 길이 확인하기
console.log(str.length); // 12

//문자열 결합하기
let hello = "Hello, ";
let world = "world!";
let result = hello.concat(world);
console.log(result)

//문자열 자르기
//start ~ start + end
console.log(result.substr(7 , 5)); //world
//start ~ end
console.log(result.slice(7, 12)); // world

//문자열 검색
console.log(result.search("world")); // 7

//문자열 대체
let replace = result;
let resultRep = replace.replace("world" , "JavaScript");
console.log(resultRep);

//문자열 분할
let longStr = "apple, banana, kiwi";
let resultArr = longStr.split(",");
console.log(resultArr);
console.log(typeof resultArr);
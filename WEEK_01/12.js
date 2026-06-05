//배열

// 생성
let fruits = ["사과" , "바나나", "오렌지"];
console.log(fruits);
console.log(fruits.length);

// 크기를 지정하여 생성
let nums = new Array(5);
console.log(nums);
console.log(nums.length);

// 요소 접근 : Index
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

//배열 메서드
// push
fruits.push("용과");
console.log("push: " ,fruits);

// pop
fruits.pop();
console.log("pop: " , fruits);

//unshift
fruits.unshift("파인애플");
console.log("unshift: " , fruits)

// shift
fruits.shift();
console.log("shift: ", fruits);

//splice
fruits.splice(1 , 1 , "포도");
console.log("splice: " , fruits);

fruits.splice(1 , 2, "변화" , "변화");
console.log("splice: " , fruits);

fruits = ["사과" , "바나나", "오렌지"];

//slice
let slicedFruits = fruits.slice(0 , 2);
console.log(slicedFruits);


// forEach , map, filter , find
let numbers = [1, 2, 3, 4, 5];

// 매개변수 자리에 함수를 넣는 것 : 콜백 함수
numbers.forEach(function(item){
    console.log("item: ",item);
});

numbers.map(function(item){
    return item *2;
}).forEach( x => console.log("duble item: " ,x));


numbers.filter( x => x % 2 === 0).forEach(x => console.log("even item: " , x));

let res = numbers.find(function(item){
    return item % 2;
});

console.log(res);
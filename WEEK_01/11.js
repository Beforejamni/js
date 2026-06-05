//객체

//기본적인 객체 생성 방법
let person = {
    name : "홍길동",
    age : 30,
    gender : "남자",
    print : function(){
        console.log("홍길동 남자 입니다.")
    }
};

// 접근하는 방법
console.log(person.name);
console.log(person.age);
console.log(person.gender);
person.print();

// 생성자 함수를 이용한 객체 생성 방법
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

let person1 = new Person("홍길동", 30 , "남자");
let person2 = new Person("홍길순", 20 , "여자");

let personHong = {
    name : "홍길동",
    age : 30,
    gender: "남자"
}

let keys = Object.keys(personHong);
console.log("keys =>", keys);
let value = Object.values(personHong);
console.log("values =>" , value);

let entries = Object.entries(personHong);
console.log("entires=> ", entries);

// assign
let newPerson = {};
Object.assign(newPerson , person , {age: 31});
console.log("newPerson =>" , newPerson);

//객체 비교, 병도 공간에 대한 주소가 다르기 떄문에 false가 나온다
let personA = {
    name : "A",
    age : 30,
    gender: "남자"
};

let personB = {
    name : "A",
    age : 30,
    gender: "남자"
};
console.log("equals: " , personA === personB);

console.log("JSON equals: " , JSON.stringify(personA) === JSON.stringify(personB));

//객체 병합
personA = {
    name : "A",
    age : 30,
};

personB = {
    gender: "남자"
};

let sumPerson= {...personA , ...personB};
console.log("sumPerson: " , sumPerson);
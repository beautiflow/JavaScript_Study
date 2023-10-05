// 배열 구조 분해 : 기본값
let[x, y] = [1, 2];
console.log(x); // 1
console.log(y); // 2

let users3 = ['Mike', 'Tom', 'Jane'];
let[user5, user6, user7] = users;
console.log(user5);
console.log(user6);
console.log(user7);

// 배열 구조 분해 : 일부 반환깂 무시
let[user8, , user9] = ['Mike', 'Tom', 'Jane', 'Tony'];
console.log(user8);
console.log(user9);

// 배열 구조 분해 : 바꿔치기
let a = 1;
let b = 2;

[a, b] = [b, a];
console.log(a, b);

// 객체 구조 분해
let user10 = {name1: 'Mike', age1: 30};
let {name1, age1} = user10;
// == let name = user.name;
// == let age = user.age;

console.log(name1);
console.log(age1);

// 객체 구조 분해 : 새로운 변수 이름으로 할당
let user11 = {name2: 'Mike', age2: 30};

// let {name, age} = user11;
let {name2: userName, age2: userAge} = user11;
console.log(userName);
console.log(userAge);

// 객체 구조 분해 : 기본값
let user12 = {name3: 'Mike', age3: 30};
// let {name, age, gender} = user12;
// gender 는 값이 정해지지 않아서 undefined 이다. 
// 객체로 받은 값이 undefined 일 때만 기본값을 사용한다.
// 그래서 기본값을 설정해준다.
let {name3, age3, gender1 = 'male'} = user12;

//  만약 기본값 외에 다른 값이 존재한다면 그 다른 값이 사용된다.
let user13 = {
    name: 'Jane',
    age: 18,
    gender2: 'female'
};

let {name, age, gender2 = 'male'} = user13;
console.log(gender2)

console.log(" ");
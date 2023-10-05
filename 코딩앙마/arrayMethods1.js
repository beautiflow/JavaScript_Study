// Array
// push() : 뒤에 삽입
// pop() : 뒤에 삭제
// unshift() : 앞에 삽입
// shift() : 앞에 삭제

// arr.splice(n, m) : 특정 요소 지움
let arr1 = [1,2,3,4,5];
arr1.splice(1,2);
console.log(arr1);

// arr.splice(n, m, x) : 특정 요소 지우고 추가
let arr2 = [1,2,3,4,5];
arr2.splice(1, 3, 100, 200);
console.log(arr2);

let arr3 = ["나는", "철수", "입니다."];
arr3.splice(1, 0, "대한민국", "소방관");

// arr.splice() : 삭제된 요소 반환
let arr4 = [1,2,3,4,5];
let result1 = arr4.splice(1,2);
console.log(arr4);
console.log(result1);

// arr.slice(n, m) : n 부터 m 까지 반환
let arr5 = [1,2,3,4,5];
arr5.splice(1,4); // [2,3,4]

let arr6 = arr.slice();
console.log(arr6);

// arr.concat(arr2, arr3 ..) : 합쳐서 새로운 배열 반환
let arr7 = [1,2];
arr7.concat([3, 4]); // [1, 2, 3, 4]
arr7.concat([3, 4], [5, 6]); // [1, 2, 3, 4, 5, 6]
arr7.concat([3, 4], 5, 6); // [1, 2, 3, 4, 5, 6]

// arr.forEach(fn) : 배열 반복
let users = ["Mike", "Tom", "Jane"];
users.forEach((item, index, arr) => {

}); 

// forEach
let arr8 = ["Mike", "Tom", "Jane"];

arr8.forEach((name, index) => {
    console.log(`${index+1}. ${name}`);
});

// arr.indexOf
// arr.lastIndexOf
let arr9 = [1,2,3,4,5,1,2,3];
console.log(arr9.indexOf(3));  // 2
console.log(arr9.indexOf(3, 3)); // 7
console.log(arr9.lastIndexOf(3)); // 7

// arr.includes() : 포함하는지 확인
let arr10 = [1,2,3];
console.log(arr10.includes(2));  // true
console.log(arr10.includes(8));  // false

// arr.find(fn) / arr.findIndex(fn)
// 첫번재 true 값만 반환하고 끝 만약 없으면 undefined 반환
let arr11 = [1, 2, 3, 4, 5];

const result4 = arr11.find((item) => {
    return item % 2 === 0;
});

console.log(result4);

let userList = [
    {name: "Mike", age: 30 },
    {name: "Jane", age: 27 },
    {name: "Tom", age: 10 },
];

const result5 = userList.find((user) => {
    if(user.age < 19){
        return true;
    }
    return false;
});

console.log(result5);

const result6 = userList.findIndex((user) => {
    if(user.age < 19){
        return true;
    }
    return false;
});

console.log(result6);


// filter
let arr12 = [1, 2, 3, 4, 5, 6];

const result7 = arr12.filter((item) => {
    return item % 2 === 0;
});

console.log(result7);

// arr.reverse() : 역순으로 재정렬
let arr13 = [1, 2, 3, 4, 5];
console.log(arr13.reverse()); // [5, 4, 3, 2, 1];

// arr.map(fn)
// : 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환
let newUserList = userList.map((user, index) => {
    return Object.assign({}, user, {
        id: index + 1,
        inAdult: user.age > 19,
    });
});

console.log(newUserList);


// join, split
let arr14 = ["안녕", "나는", "철수야"];

let result8 = arr14.join("-");

console.log(result8);

const users2 = "Mike, Jane, Tom, Tony";
const result9 = users2.split(",");

console.log(result9);

// Array.isArray(); - 배열인지 아닌지 확인
let user4 = {
    name: "Mike",
    age: 30,
};

let userList2 = ["Mike", "Tom", "Jane"];
console.log(typeof user4);
console.log(typeof userList2);

console.log(Array.isArray(user4));
console.log(Array.isArray(userList2));

console.log(" ");
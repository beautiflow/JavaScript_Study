// arr.sort()
// 배열 재정렬, 배열 자체가 변경되니 주의
// 인수로 정렬 로직을 담은 함수를 받음
let array = [1, 5, 3, 4, 2];
array.sort();
console.log(array);

let array2 = ["a", "c", "e", "d", "b"];
array2.sort();
console.log(array2); 

let array3 = [27, 8, 5, 13];
array3.sort((a, b) => {
    console.log(a, b);
    return a-b;
});
console.log(array3);


// arr.reduce()
// 인수로 함수를 받음
// (누적 계산값, 입력값) => {return 계산값};
// = 배열의 모든 수 합치기
let array4 =[1, 2, 3, 4, 5];
const result10 = array4.reduce((prev, cur)=>{
    return prev+cur;
}, 0);
console.log(result10); 

let userList3 = [
    {name: "Mike", age: 30},
    {name: "Tom", age: 10},
    {name: "Jane", age: 27},
    {name: "Sue", age: 26},
    {name: "Harry", age: 3},
    {name: "Steve", age: 60},
];

let result11 = userList3.reduce((prev, cur) => {
    if(cur.age > 19){
        prev.push(cur.name);
    }
    return prev;
}, []);

console.log(result11); 
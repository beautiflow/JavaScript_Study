/*
    arguments
    - 함수로 넘어 온 모든 인수에 접근
    - 함수 내에서 이용 가능한 지역 변수
    - length / index
    - Array 형태의 객체
    - 배열의 내장 메서드 없음 (forEach, map)
*/

/*
    나머지 매개변수 
    : 정해지지 않은 개수의 인수를 배열로 나타날 수 있도록 함
*/
function showNames(...names){
    console.log(names);
}
showNames(); // [] <- 값이 아무것도 전달되지 않으면 undefined 가 아니라 빈배열로 전달됨
showNames('Mike');  // ['Mike']
showNames('Mike', 'Tom');  //['Mike', 'Tom']

/****************************
 * 나머지 매개변수
 * 전달 받은 모든 수를 더해야함
 ****************************/

function add(...numbers){
    let result12 = 0;
    numbers.forEach((num)=>(result12 += num));
    console.log(result12);
}

add(1, 2, 3);
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


function add2(...numbers){
    let result13 = numbers.reduce((prev, cur) => prev+cur);
    console.log(result13);
}

add2(1, 2, 3);
add2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

/****************************
 * 나머지 매개변수
 * user 객체를 만들어 주는 생성자 함수를 만들자
 ****************************/

// 나머지 매개변수는 항상 맨 마지막에 위치해야 한다.
function User(name4, age4, ...skills){
    this.name4 = name4;
    this.age4 = age4;
    this.skills = skills;
}

const user14 = new User('Mike', 30, "html", "css");
const user15 = new User('Tom', 20, "JS", "React");
const user16 = new User('Jane', 10, "English");

console.log(user14);
console.log(user15);
console.log(user16);
/*
call
: call 메서드는 모든 함수에서 사용할 수 있으며, this 를 특정 값으로 지정할 수 있다.

*/

const mike = {
    name: "Mike",
};

const tom = {
    name: "Tom",
};

function showThisName(){
    console.log(this.name);
}

showThisName(); // 여기서의 this 는 window 이다.
showThisName.call(mike);
showThisName.call(tom);

function update(birthYear, occupation){
    this.birthYear = birthYear;
    this.occupation = occupation;
}

update.call(mike, 1999, "singer");
console.log(mike);

update.call(tom, 2002, "teacher");
console.log(tom);

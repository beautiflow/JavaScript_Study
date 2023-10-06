/*
apply
: apply 는 함수 매개변수를 처리하는 방법을 제외하면 call 과 완전히 같다.
: call 은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만, apply 는 매개별수를 배열로 받는다.
*/

const mikeA = {
    name: "Mike",
};

const tomA = {
    name: "Tom",
};

function showThisNameA(){
    console.log(this.name);
}

function updateA(birthYear, occupation){
    this.birthYear = birthYear;
    this.occupation = occupation;
}

updateA.apply(mikeA, [1999, "singer"]);
console.log(mikeA);

updateA.apply(tomA, [2002, "teacher"]);
console.log(tomA);


const nums = [3, 10, 1, 6, 4];
// const minNum = Math.min(...nums);
// const maxNum = Math.max(...nums);

const minNum = Math.min.apply(null, nums);
// = Math.min.apply(null, [3, 10, 1, 6, 4])

const maxNum = Math.max.call(null, ...nums);
// = Math.max.call(null, 3, 10, 1, 6, 4)

console.log(minNum);
console.log(maxNum);

console.log(" ");

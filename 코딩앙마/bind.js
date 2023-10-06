/*
bind
: 함수의 this 값을 영구히 바꿀 수 있다.
*/

const mikeB = {
    name: "Mike",
};


function updateB(birthYear, occupation){
    this.birthYear = birthYear;
    this.occupation = occupation;
}

const updateMikeB = updateB.bind(mikeB);

updateMikeB(1980, "police");
console.log(mikeB);

const user18 = {
    name: "Mike",
    showName2: function(){
        console.log(`hello, ${this.name}`);
    },
};

user18.showName2();

let fnB = user18.showName2;

fnB.call(user18);
fnB.apply(user18);

let boundFn = fnB.bind(user18);
boundFn();
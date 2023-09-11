const age = 96;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner+2;
}

const krAge = calculateKrAge(age);

console.log(krAge);


// 과제 : 계산기 만들기
const calculator = {
    add: function(a, b){
        return a+b;
    },
    minus: function(a, b){
        return a-b;
    },
    multiply: function(a, b){
        return a*b;
    },
    devide: function(a, b){
        return a/b;
    },
    power: function(a, b){
        return a**b;
    }
};


const plusResult = calculator.add(4,2);
const minusResult = calculator.minus(4,2);
const multiplyResult = calculator.multiply(4,2);
const devideResult = calculator.devide(4,2);
const powerResult = calculator.power(4,2);

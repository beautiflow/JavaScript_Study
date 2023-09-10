const player = {
    name: "Nico",
    age: 98,
};

console.log(player);
player.name = "nicolas";
console.log(player);
player.sexy = "soon";
console.log(player);


function plus(potato, salad){
    console.log(potato+salad);
}

plus(5, 10);
plus(1.33453, 9898);
plus(9898, 1.33453);


// 과제 : 계산기 만들기
const calculator = {
    add: function(a, b){
        console.log(a+b);
    },
    minus: function(a, b){
        console.log(a-b);
    },
    multiply: function(a, b){
        console.log(a*b);
    },
    devide: function(a, b){
        console.log(a/b);
    },
    power: function(a, b){
        console.log(a**b);
    }



};

calculator.add(4,2);
calculator.minus(4,2);
calculator.multiply(4,2);
calculator.devide(4,2);
calculator.power(4,2);
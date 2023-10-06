// const car = {
//     wheels: 4,
//     drive(){
//         console.log("drive..");
//     },
// };

const bmw = {
    color: "red",
    navigation: 1,
};

const benz = {
    color: "black",
};

const audi = {
    color: "blue",
};

// bmw.__proto__ = car;
// benz.__proto__ = car;
// audi.__proto__ = car;

const x5 = {
    color: "white",
    name: "x5",
};

x5.__proto__ = bmw;


const KIA = function(color){
    const c = color;
    this.getColor = function(){
        console.log(c);
    };
};

// KIA.prototype.wheels = 4;
// KIA.prototype.drive = function(){
//     console.log("drive..");
// };
// KIA.prototype.navigation = 1;
// KIA.prototype.stop = function(){
//     console.log("STOP!");
// };

KIA.prototype = {
    constructor: KIA,
    wheels: 4,
    drive(){
        console.log("drive..");
    },
    navigation: 1,
    stop(){
        console.log("STOP!");
    },
};

const x6 = new KIA("red");
const x7 = new KIA("blue");

// x6.__proto__ = car;
// x7.__proto__ = car;
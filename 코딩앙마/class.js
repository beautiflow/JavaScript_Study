/*
class
: ES6 에 추가된 스펙
*/


const Userr = function(name, age){
    this.name = name;
    this.age = age;
    // this.shoNameC = function(){
    //     console.log(this.name);
    // };
};

Userr.prototype.showNameC = function(){
    console.log(this.name);
};

const mikeC = new Userr("Mike", 30);

class Userr2 {
    constructor(name, age){
        this.name = name;
        this.age = age;
    } 
    shoNameC2(){
        console.log(this.name);
    }
}

const tomC = new Userr2("Tom", 19);
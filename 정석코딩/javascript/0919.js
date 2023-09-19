person.call(ooo, "aaa", 12)

var ooo = {}

function Person(name, age){
    this.name = name;
    this.age = age;
}

function Point(x, y){
    this.x = x;
    this.y = y;
}

var ooo = {}

Person.call(ooo, "aaa", 12)

Point.call()
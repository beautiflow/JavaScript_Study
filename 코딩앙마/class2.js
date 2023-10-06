// extends
// method overriding : 동일한 메서드로 작성을 하면 덮어쓰기가 된다

class CarC {
    constructor(color){
        this.color = color;
        this.wheels = 4;
    }
    drive(){
        console.log("drive..");
    }
    stop(){
        console.log("STOP!");
    }
}

class BmwC extends CarC{
    constructor(color){
        super(color);
        this.navigation = 1;
    }
    park(){
        console.log("PARK");
    }
    stop(){
        super.stop();
        console.log("OFF");
    }
}

// const z4C = new BmwC("bule");
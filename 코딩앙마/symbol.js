    // Symbol : 유일성 보장
    // Symbol.for() : 전역 심볼
    // 하나의 심볼만 보장받을 수 있음
    // 없으면 만들고, 있으면 가져오기 때문
    // Symbol 함수는 매번 다른 Symbol 값을 생성하지만,
    // Symbol.for 메소드는 하나를 생성한 뒤 키를 통해 같은 Symbol 을 공유

    
    // 다른 개발자가 만들어 놓은 객체
    const user3 = {
        name: "Mike",
        age: 30,
    };

    // 내가 작업
    const showName = Symbol('show name');
    user[showName] = function(){
        console.log(this.name);
    };

    user[showName]();


    // 사용자가 접속하면 보는 메시지
    for(let key in user){
        console.log(`His ${key} is ${user[key]}.`);
    }


    console.log(" ");

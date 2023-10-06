/* 

Generator
: 함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능
: 다른 작업을 하다가 다시 돌아와서 next() 해주면 진행이 멈췄던 부분부터 이어서 다시 실행
- next(), return(), throw() 메서드를 가지고 있음

- Generator 는 iterable 이다.
    * Symbol.iterator 메서드가 있다.
    * Symbol.iterator 는 iterator 를 반환해야 한다.
- Iterator
    * next 메서드를 가진다.
    * next 메서드는 value 와 done 속성을 가진 객체를 반환한다.
    * 작업이 끝나면 done 은 true 가 된다.

- 값을 미리 만들어 두지 않음
- 필요한 값만 그때 그때 생성함
- 필요한 순간까지 계산을 미룰 수 있음

*/

function* fn(){
    console.log(1);
    yield 1;
    console.log(2);
    yield 2;
    console.log(3);
    console.log(4);
    yield 3;
    return "finish";
}

const ag = fn();

function* fn2(){
    const num1 = yield "첫번째 숫자를 입력해주세요";
    console.log(num1);

    const num2 = yield "두번째 숫자를 입력해주세요";
    console.log(num2);

    return num1 + num2;
}

const ag2 = fn2();

function* gen1(){
    yield "W";
    yield "o";
    yield "r";
    yield "l";
    yield "d";
}

function* gen2(){
    yield "Hello, ";
    yield* gen1();
    yield "!";
}
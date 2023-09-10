## 230910

### 2.3 const and let
* const 와 let 의 차이
  * constant : 상수, 값이 바뀔 수 없다.
    * const 로 variable을 만들었다면, 절대 값을 업데이트 할 수 없다.
  * let : 새로운 것을 생성할 때 사용하는 것 

### 2.4 Booleans
* null : '아무것도 없음'을 의미, 그 변수에 아무 것도 없다는 걸 뜻함
    비어있다기 보다는, 아무것도 없는 상태로 채워짐
    자연스럽게 사용하지 않는다. 어떤 것이 없다는 것을 확실하게 하기 위해 사용.
* false : false라는 값이 존재함
* undefined, null, false, true 는 문자가 아니라 타입이다.
* undefined : 컴퓨터 메모리 안에는 존재한다. 공간은 있는데 값이 들어가지 않은 것이다.


* true : 켜져있음
* false : 꺼져있음
* null : 비어있음
* undefined : variable 이 메모리에 만들어지고 컴퓨터가 이 variable 에 대해 인지하고 있지만, 값이 없는 것이다.


### 2.6 Objects
* Object : property 를 가진 데이터를 저장하도록 해주며, {} 를 사용한다.

    const player = {
name : tomato,
color : red,
food : true,
};

* array 와 object 차이
  * array : 설명이 필요하지 않은 데이터 리스트들
  * object : 설명이 필요한 정보가 담긴 데이터 리스트들

* property를 불러오는 방법은 2가지
  1. console.log(player.name); => tomato
  2. console.log(player["name"]); => tomato

* object 안에 property 를 추가하고 수정하는 것은 가능하다.
* 하지만 선언된 object 를 바꾸는 것은 불가능하다.

 ❓ 의문
* const 는 수정할 수 없는 것이 맞다. 여기서 하는 건 object 안을 수정하는 것이지 object 는 동일하다. const 전체를 하나의 값으로 업데이터 하려고 할 때 에러가 발생한다.


### 2.7 Functions part One
* function : 내가 계속 반복해서 사용할 수 있는 코드 조각
             어떤 코드를 캡슐화해서 실행을 여러번 할 수 있게 해준다.

* function 선언
  function 함수명(){
    실행 코드
  }

* function 실행 : 함수명();
  
* argument(인수)는 function 을 실행하는 동안 정보를 function 에게 보낼 수 있는 방법으로, 소괄호 안에 위치한다.


### 2.8 Functions part Two

* NaN : Not a Number
* function 의 괄호 안에 매개변수에서 argument를 받아들일 수 있다.
* argument는 하나만 받을 수 있는게 아니라 여러 개를 받을 수 있다.
* function 의 값은 function 안에서만 존재한다.
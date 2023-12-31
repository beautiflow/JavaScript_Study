
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



### 2.12 Recap
* return은 말자체로 다시 돌려준다는 의미이다
* 해당 함수의 변수값을 지정해주면 해당 code 를 안에서 실행해서
  그 결과를 해당 함수의 변수값을 선언한 변수한테 돌려주는 것이다.

* function 안에서 return 과 추가작업을 입력하면 return 만 작업하고
  추가 수행은 이뤄지지 않는다.
  만약 return 앞에 기타 작업이 있다면 그 작업은 수행된다.
  즉, return 까지만 수행된다.


  ### 2.13
  * prompt 는 사용자에게 창을 띄울 수 있도록 하는 역할
  * type of 는 변수의 type 을 보는 방법이다.
  * ParseInt() 는 string 을 숫자로 변환하는 역할
  * NaN = not a number
  * number 은 크기 비교가 가능하다. string 은 불가능
  * function 은 내부에서 외부로 실행


### 2.14
* isNaN은 무언가가 NaN인지 판별하는 방법이다.
* 결과는 boolean 값으로 보여준다.

* 조건문 식
  if(condition){
      // condition === true
  }
  else{
      // condition === false
  }
  * 여기서 condition 은 boolean 으로 판별 가능해야 한다.



### 2. 15
* true || true === true
* false || true === true
* true || false === true
* false || false === false

* true && true === true
* false && true === false
* true && false === false
* false && false === false


### 3.0
* console 에 document 를 입력하면, 작성한 HTML 을 가져올 수 있다.
* document 는 브라우저에 존재하는 object console 에 console.dir(document) 를 호출해보면, document.title 이 HTML 에서 정의한 title 과 같다.
* JS 에서 HTML document 객체로부터 title 을 가져올 수 있다.
* JS 는 HTML 에 접근하고 읽을 수 있게 설정되어 있다.
* 또한 JS 를 통해 HTML 을 바꿀 수 있다.


### 3.1
* document 라는 객체는 JS 에서 HTML 파일을 불러올 수 있도록 도와준다.
* document 의 함수중에는 getElementById 라는 함수가 있는데, 이 함수가 HTML 에서 id 를 통해 element 를 찾아준다.
  ex) document.getElementById("idName");



### 3.2
* JS 로 HTML 을 호출하는 방법들은 대게 코드를 사용해서 불러올 수 있다.
  - getElementById() : 해당 아이디 하나만 불러올 수 있다.
  - getElementByClassName() : 해당 클래스이름으로 불러올 수 있으며, 동일 요소가 있을 시 배열 형태를 보여준다.
  - getElementByTag() : 해당 태그를 불러올 수 있으며, 중복요소가 있으면, 배열 형태로 나타낸다.
  - queryselect/querySelectAll : 해당 태그 및 아이디 클래스명에 속한 요소들을 콜링할 수 있으며 중복요소가 많을 시 queryselect 는 첫번째 요소만, querySelectAll 은 모든 조건들을 보여준다.



### 3.3
* 우리가 JavaScript 를 이용해서 html 을 변경할 수 있는 이유는 html body 태그안에 script 를 이용해서 javascript 와 연결해주기 때문이다. 이것으로 인해 document 가 존재할 수 있다.
* element 내부를 보기 위해서는 console.dir() 을 사용하면 되고, 이는 객체로 표현된다.
* element 중 on 이 붙은 것은 event 이다.
  * event 란 우리가 마우스를 클릭하거나, 키보드를 치거나 하는 어떤 행위들을 말하는 것이다.

  * title.addEventListener("click", 함수) : 누군가 title 을 click 하는 것을 할 것이다.
    * 첫번째 인자에는 원하는 이벤트를, 두번째 인자에는 하고 싶은 행동을 넣으면 된다.
    * 함수자리에는 함수의 실행을 담당하는 괄호를 넣지 않아야한다. 자바스크립트가 대신 함수의 실행을 담당하기 때문이다.



### 3.4
* 000.addEventListener("", functionName);
  * listen 하고 싶은 event 찾는 방법
    1. 구글에 찾고 싶은 element 의 이름 검색하기
       ex) h1 html element mdn(mozilla developer network)
    2. 그 중에서 web APIs 가 포함된 페이지 찾기(JS 관점에서 HTML heading element 란 의미)

    * console.dir 을 통해서 element 를 console 에 출력시키기
    * console.dir(title); <= 여기서도 사용가능한 event 를 찾을 수 있다.
    * property 이름 앞에 on 이 있다면 그게 바로 eventlistener 이다
    * 사용할 땐 on을 빼고 사용하면 된다.

* style 은 CSS 를 통해서 변경되어야 한다.



### 3.5
* event 를 사용하는 두 가지 방법
    1. title.addEventListener("click", handleTitleClick);
    2. title.onClick = handleTitleClick;

    * 위에 두 코드 모두 동일하나 addEventListener를 선호하는 이유는 removeEventListener 을 통해서 event listener 을 제거할 수 있기 때문이다.

* document 에서 body, head, title 은 중요해서 언제든 'document.body' 로 가져올 수 있지만
  div 나 h1 등 element 들은 querySelector getElementById 등으로 찾아야한다.
  ex) document.querySelector("h1");



  ### 3.6
  1. element 찾기
  2. event 를 listen
  3. 그 event 에 반응하기



### 3.7
* style 작업에 적합한 도구는 CSS
* animation 에 적합한 도구는 JS
* html 파일은 CSS 문서와 JS 문서를 import 하고 있다.

* 에러를 줄이기위해 raw string 을 쓰는 대신 const 를 생성하자
* JS 로 모든 class name 을 변경하지 않는다.



### 3.8
* classList 는 우리가 class 들의 목록으로 작업할 수 있게끔 허용해준다.
* className 은 이전 class 를 상관하지 않고 모든 것을 교체해버린다.
  
* 그래서 classList 를 사용한다. class 를 목록으로 작업할 수 있게끔 허용한다. classList 를 이용하는 건 element 의 class 내용물을 조작하는 것을 허용한다는 뜻이다. 
  * classList 에는 멋진 function 이 있다
  * contains() : 우리가 명시한 class 가 HTML element 의 class 에 포함되어 있는지를 말해준다.
  * remove() : 명시한 class name 을 제거한다.
  * add() : 명시한 class name 을 추가한다.
  * function handleTitleClick() {
        const clickedClass = "clicked";
        if(h1.classList.contains(clickedClass)) {
            h1.classList.remove(clickedClass);
        } else {
            h1.classList.add(clickedClass);
            }
          }

* 이 보다 더 좋은 function() 이 존재한다.
  * toggle() : class name 이 존재하는지 확인
  * class name 이 존재하면 toggle 은 class name 을 제거하고, class name 이 존재하지 않으면 toggle 은 class name 을 추가한다.
  * function handleTitleClick() {
        h1.classList.toggle("clicked");
      }
  * 한번만 적기 때문에 const 도 필요 없다. toggle 은 버튼 같은 것. 켜고 끄고



### 4.0 Input Values
* querySelector 로 id 태그를 쓸 때는 # 을 써야한다.
* 하지만 getElementById 로 id 를 쓸 땐 # 을 쓰지 않아도 된다.



### 4.1 Form Submission
* form 안에 속성에는 required(필수), maxlength, type, placeholder 등이 있다.
* input 밖을 form 으로 감싸면 따로 조건문을 주지 않아도 html 이 최대길이, 빈칸 등을 잡아준다.
* 문제는 버튼을 클릭할 때 자동으로 submit (새로고침)이 된다는 것이다. 
* 다음 장에서 해결



### 4.2 Events
* function onLoginSubmit(event){
    event.preventDefault(); // 브라우저가 기본 동작을 실행하지 못하게 막기
                            // event object 는 preventDefault 함수를 기본적으로 가지고 있음
    console.log(event);
  }

* loginForm.addEventListener("submit", onLoginSubmit);
  // submit 이벤트가 발생한다면, onLoninSubmit 함수를 실행시킨다는 의미
  // JS 는 onLoginSubmit 함수 호출시 인자를 담아서 호출함. 해당 인자는 event object 를 담은 정보들

* 중요!!
  * form 을 submit 하면 브라우저는 기본적으로 페이지를 새로고침하도록 되어 있다.
    (우리가 원하는 것이 아니다.)
  * preventDefault() 함수를 추가함으로써 브라우저의 기본 동작을 막을 수 있다.
    * 이 preventDefault() 함수는 EventListner 함수의 '첫번째 argument' 안에 있는 함수이다.
    * 첫 argument 는 지금 막 벌어진 event 들에 대한 정보를 가지고 있다.
    * JS 는 (기본적으로) argument 를 담아서 함수를 호출하는데, 이 argument 가 기본정보들을 제공하고 있다.
      ex) 누가 submit 의 주체인지, 몇 시에 submit 을 했는지 등등 콘솔에 출력해보면 알 수 있다.



### 4.3 Events part Two
* addEventListener 에 function 을 주게되면, event 가 일어났을 때, 그 function 을 JS 가 실행시킴
* 이때 js 는 addEventListener 에 따라 단순히 function 을 실행시키는 것에 더하여 그 function 의 첫번째 인자로 직전에 발생된 event 에 대한 정보를 object 형태로 넣어준다.
* 또한 이 과정을 통해서 발생한 첫번째 인자는 객체이고, 그 객체값 중 하나로 preventDefault() 함수가 있다.
* 이 preventDefault() 함수는 자동실행이 되는 것을 막아주므로 event.preventDefault() 같은 식으로 코드를 작성하면, 자동실행을 막아줌



### 4.4 Getting Username
* const HIDDEN_CLASSNAME = 'hidden';
  : 관습 - string 만 포함된 변수는 대문자로 쓴다 + 중요한 변수가 아니라서

* 'hello!' + username; 은 `hello ${username};  `` 과 같으며 후자의 방법을 추천한다.

* HTML 의 어느 한 부분을 잡고 거기에 class 를 추가하거나 빼고 싶을 때는 classList.add('classname'), classList.remove('classname') 를 사용한다.
* 클래스를 마음대로 붙였다 뗄 수 있게 해준다. 위에서는 display:none; 이 되어있기 때문에 해당 html 태그를 hide or show 할 수 있다.

* 오늘 강의
  * 클릭하면 자동으로 새로고침되어 정보가 날아가는 것을 막는 것
    - preventDefault();
  * loginForm 을 감춘다
    - hidden
  * hidden 되었던 A 문구가 나타난다
    - remove hidden
  * A 문구와 username 을 합쳐서 완전한 문구를 완성한다. 




### 4.5 Saving Username
* localStorage : 브라우저에 무언가를 저장한 후 나중에 가져올 수 있음

* localStorage.setItem("username", username);

* localStorage.setItem(key, value);
  : 로컬 저장소에 해당 키와 값을 저장함
* localStorage.getItem(key);
  : 로컬 저장소에 해당 키와 해당되는 값을 불러옴
* localStorage.removeItem(key);
  : 로컬 저장소에 해당 키에 해당되는 키, 값을 삭제함
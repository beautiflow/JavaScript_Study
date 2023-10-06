// 일정 시간이 지난 후 함수를 실행

function fn(){
   // console.log(3)
}

setTimeout(fn, 3000);

// 위의 식과 아래 식이 같은 표현이다.

setTimeout(function(){
 //   console.log(3)
}, 3000);


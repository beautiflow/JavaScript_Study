// 일정 시간 간격으로 함수를 반복

let num2 = 0;

function showName1(name5){
    console.log(name5);
    num2++;
    if(num2 > 3){
        clearInterval(tId);
    }
}
//const tId = setInterval(showName1, 1000, 'Mike');

let num1 = 0;

function showTime(){
    console.log(`안녕하세요. 접속하신지 ${num1++}초가 지났습니다.`);
    if(num1 > 5){
        clearInterval(tId2);
    }
}
//const tId2 = setInterval(showTime, 1000);
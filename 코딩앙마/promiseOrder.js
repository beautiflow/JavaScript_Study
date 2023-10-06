// promise 함수로 구현
const f1p = () => {
    return new Promise((res, rej) => {
        setTimeout(function() {
            res("1번 주문 완료");
        }, 1000);
    });
};

const f2p = (message)=>{
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(function(){
            rej("2번 주문 실패");
        }, 3000);
    });  
};

const f3p = (message) =>{
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(function(){
            res("3번 주문 완료");
        }, 2000);
    });
};

// Promise.all
// 하나라도 누락되면 안되는 경우 페이지를 보여주지 않아야 할 때 사용한다.
// 다 보여주거나 아예 안보여주거나 할 때 사용
// 모든 작업이 완료될 때 까지 기다린다.
// console.time("x");
// Promise.all([f1p(), f2p(), f3p()]).then((res) => {
//     console.log(res);
//     console.timeEnd("x");
// });


// Promise.race
// 하나라도 일등으로 완료되면 끝낸다.
// 용량이 큰 이미지들을 로딩하는데 그 중에 하나라도 로딩이 되면 그 이미지를 보여줄 때 사용
console.time("x");
Promise.race([f1p(), f2p(), f3p()]).then((res) => {
    console.log(res);
    console.timeEnd("x");
});






// 프로미스 체이닝 (Promise chaining)
// console.time("시작");
// f1p()
// .then((res) => f2p(res))
// .then((res) => f3p(res))
// .then((res) => console.log(res))
// .catch(console.log)
// .finally(()=>{
//     console.timeEnd("시작");
// });
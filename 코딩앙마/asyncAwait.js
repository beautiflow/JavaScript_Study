const f1a = () => {
    return new Promise((res, rej) => {
        setTimeout(function() {
            res("1번 주문 완료");
        }, 1000);
    });
};

const f2a = (message)=>{
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(function(){
            res("2번 주문 완료");
           // rej("2번 주문 실패");

        }, 3000);
    });  
};

const f3a = (message) =>{
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(function(){
            res("3번 주문 완료");
        }, 2000);
    });
};

console.log("시작");
async function order(){
    try{
    const result1 = await Promise.all([f1a(), f2a(), f3a()]);
    console.log(result1);
    }
    catch(e){
        console.log(e);
    }
    console.log("종료");
}

order();
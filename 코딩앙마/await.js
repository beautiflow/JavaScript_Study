// await

function getName(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name);
        }, 1000);
    });
}

async function showNameA(){
    const result = await getName('Mike');
    console.log(result);
}

console.log("시작");
showNameA();

const user = {
    name: "Mike",
    age : 30,
};

const user2 = Object.assign({}, user);
user2.name = "Tom";

console.log(user);
console.log(user2);


const result = Object.keys(user);
console.log(result);

const result2 = Object.values(user);
console.log(result2);

const result3 = Object.entries(user);
console.log(result3);

let arr = [
    ["mon", "월"],
    ["tue", "화"],
    ["wed", "수"],
    ["thu", "목"],
    ["fri", "금"],
    ["sat", "토"],
    ["sun", "일"],
];

const day = Object.fromEntries(arr);
console.log(day);

console.log(" ");

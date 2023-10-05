/**************************
 * 전개구문
 * arr15를 [4,5,6,1,2,3] 으로
 ***************************/

let arr15 = [1, 2, 3];
let arr16 = [4, 5, 6];

// arr16.reverse().forEach((num) => {
//     arr15.unshift(num);
// });

arr15 = [...arr16, ...arr15];

console.log(arr15);

let user17 = {name : "Mike"};
let info = {age: 30};
let fe = ["JS", "React"];
let lang = ["Korean", "English"];

// user17 = Object.assign({}, user, info, {
//     skills: [],
// });

// fe.forEach((item)=>{
//     user17.skills.push(item);
// });
// lang.forEach((item)=>{
//     user17.skills.push(item);
// });

user17 = {
    ...user17,
    ...info,
    skills: [...fe, ...lang],
};

console.log(user17);
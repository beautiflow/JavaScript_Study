async function getName(){
   // return Promise.resolve("Tom");
    throw new Error("err...");
}

getName().catch((err) => {
    console.log(err);
});
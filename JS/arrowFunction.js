function asyncFunc(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("this is an promise1 :");
            resolve("success");
            },3000);
    
    });
};
function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("this is an promise2 :");
            resolve("good");
            },3000);
    
    });
};

asyncFunc().then((res)=>{
    console.log(res);
return asyncFunc1();
}).then((res)=>{
console.log(res);
})

console.log("Feytching data1...");
asyncFunc()
.then(()=>{
  console.log("fetching data 2...")
    asyncFunc1()
.then(()=>{})
    });
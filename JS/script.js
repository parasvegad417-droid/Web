// function getData(dataId,getNextData){
//      setTimeout(()=>{
//       console.log("data ",dataId);
//       if(getNextData()){
//         getNextData();
//       }
//     },3000);
// }
// console.log("getting data 1:");
// getData(1,()=>{
//   console.log("getting data 2....");
//   getData(2,()=>{
//     console.log("getting data 3....");
//     getData(3)
//   })
// })

// promisses
//  let promise =new Promise((resolve,reject)=>{
//           console.log("executed");
//           reject("error");
//  });

// another example
  // function getData(dataId,getNextData){
  //  return new Promise((resolve,reject)=>{
  //    setTimeout(()=>{
  //     //  console.log("data ",dataId);
  //     //  resolve("success"); 
  //     reject("error");
  //      if(getNextData()){
  //        getNextData();
  //      }
  //    },3000);
  //  })};
  //  getData(1,()=>{
  //   getData(2)
  //  });

    let getpromise = ()=>{
    return new Promise((resolve,reject)=>{
           console.log("executed");
           reject("Ocuures an  error");
          });
    }; 

    let promise = getpromise();
    promise.then((res)=>{
      console.log("promiss fulfilled");
      console.log(res);
    });
    promise.catch((err)=>{
      console.log("error is generated :");
    });



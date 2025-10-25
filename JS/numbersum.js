let arr=[2,3,4,5,5];
// arr.forEach((value)=>{
    // console.log(value * value);
//     console.log(value**2);
// });

let square = (value) => {
    console.log(value**2);
};
arr.forEach(square);
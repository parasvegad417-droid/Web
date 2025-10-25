let n=prompt("Enter the number :");
let arr = [];
for(let i=0;i<n;i++){
    arr[i]=i+1;
}
console.log(arr);
 
let newArray=arr.reduce((red,curr)=>{
    return red + curr;    
});
console.log(newArray);
let newArray1=arr.reduce((red,curr)=>{
      return red*curr;
      });
      console.log(newArray1);
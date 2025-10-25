const fs = require('fs');
const { parseArgs } = require('util');

const od = require('os');

console.log(od.cpus().length);

// fs.writeSync("paras.txt","HI THIS IS A PARAS and vegad")
console.log("1")

const result = fs.readFileSync("paras.txt","utf-8");

// fs.readFile("paras.txt","utf-8",(err,result)=>{
//     console.log(result)
// });

console.log(result);

console.log("2")

// outpiy:

// 1
// hi this is a parse
// 2


// deafult thread pool size=4
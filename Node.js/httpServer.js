const http= require('http');
const fs = require('fs');
const url=require('url');

const myServer = http.createServer((req,res)=>{
    if(req.url==='/favicon.ico'){
        return res.end(); 
    }
    const myUrlk= url.parse(req.url,true);
    console.log(myUrlk);
    fs.appendFile("paras.txt",`${Date.now()} : ${req.url} New REquest Is Recived\n`,(err,data)=>{
        switch(myUrlk.pathname){
            case "/": res.end("homepage");
            break;
            case "/about ":
                const username = myUrlk.query.myname
                res.end(`j=hi ${username    }`);

            break;
            default : res.end('404 Not Found');   
        }
    })
});
myServer.listen(8001,()=>{
    console.log("Server Started");  
});
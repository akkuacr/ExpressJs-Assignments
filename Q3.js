//Installation wagera pdf se dekh lena


//import express
const express= require('express');

 
const app=express();

 
var a=1;
app.get('/',(req,res)=>{
    res.send("I am at home page");
})
app.get('/about',(req,res)=>{
    
    res.send("I am at about page");

})
app.get('/contact',(req,res)=>{
    
    res.send("i am at contact page");
})
 
const port=3002;
const HOSTNAME='My-host';
app.listen(port,()=>{
    console.log(`Server Running at ${HOSTNAME}:${port}` );
})

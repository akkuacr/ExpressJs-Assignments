//Installation wagera pdf se dekh lena


//import express
const express= require('express');

 
const app=express();

 
var a=1;
app.get('/',(req,res)=>{
    res.send(`<h1>${a}</h1>`);
})
app.get('/increment',(req,res)=>{
    ++a;
    res.send(`<h1>${a}</h1>`);

})
app.get('/decrement',(req,res)=>{
    --a;
    res.send(`<h1>${a}</h1>`);
})
 
const port=3002;
const HOSTNAME='My-host';
app.listen(port,()=>{
    console.log(`Server Running at ${HOSTNAME}:${port}` );
})

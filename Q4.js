//Installation wagera pdf se dekh lena


//import express
const { json } = require('body-parser');
const express= require('express');

 
const app=express();

 
app.get('/random',(req,res)=>{
    const x=Math.random()*1000;
    const y={  "value":x};
    res.type('string');
    res.send(`${y}`);
})
 
const port=3002;
const HOSTNAME='My-host';
app.listen(port,()=>{
    console.log(`Server Running at ${HOSTNAME}:${port}` );
})

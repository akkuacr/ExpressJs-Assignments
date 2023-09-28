
const http=require('http');
const fs=require('fs');
const { hostname } = require('os');
const port=3000;

const server=http.createServer((request,response)=>{
    
   if(request.url=='/')
   {
       response.end('<h1>Welcome to Men & Women Dummy Data</h1>')
   }else if(request.url=='/men')
   {
        

      var res=fs.readFileSync("data.json");
      
      console.log(res.toString());
      console.log("Other Stuff First");
      response.statusCode=500;
        response.setHeader('Content-Type','application/json');

         response.end(res);
    
   }else if(request.url=='/women'){
    
      fs.readFile("data1.json",(err,res)=>{
         
         if(err){
            response.end('error occured');
         }else{
         console.log(res.toString());
          
          
         response.statusCode=500;
         response.setHeader('Content-Type','application/json');
   
            response.end(res);
         }

      });
      
      

   }else{
      response.end('no server found');
   }

})


server.listen(port,()=>{
   console.log(`Server is listening at ${hostname}:${port}`);
})


//data .json file contains
[{
    "id":"1",
    "name":"men's t-shirts",
    "brand":"abc"
 },
 {
    "id":"3",
    "name":"men's t-shirts",
    "brand":"abc"
 },
 {
    "id":"4",
    "name":"men's t-shirts",
    "brand":"abc"
 }]

//data1.json contains
[{
    "id":"1",
    "name":"women t-shirts",
    "brand":"abc"
 },
 {
    "id":"3",
    "name":"Women t-shirts",
    "brand":"abc"
 },
 {
    "id":"4",
    "name":"Women t-shirts",
    "brand":"abc"
 }]




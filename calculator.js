const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000, function(req,res){
    console.log("Server started on port 3k");
})

app.get("/",function(req,res){

    
    res.sendFile(__dirname +  "/index.html");
})

app.post("/",function(req,res){

 //   console.log(req.body);
 ;
    res.send("Result " + (Number(req.body.num1) + Number(req.body.num2)));
})
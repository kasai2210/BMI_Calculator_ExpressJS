const express = require("express");
const app = express();
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.send("<h1>BMI Calculator</h1>");    
})

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname+"/bmiCalculator.html");
})

app.post("/bmicalculator", function(req, res){
    let w=Number(req.body.weight);
    let h=Number(req.body.height);
    let result=w/(h*h);
    let ans="Your BMI is : "+result;
    res.send(ans);
})

app.listen(3001, function(){
    console.log("Server has been started on port 3001");
})
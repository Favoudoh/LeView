const express = require("express");
const app = express();
const bodyparser=require("body-parser");

app.use(bodyparser.urlencoded({extended:false}));

app.use("/boo",(req,res,next)=>{
    res.send('<form action="/product" method ="POST"><input type="text" name="title"> <button type="submit"> ADD something</button> </forn>')
    console.log("insidethe boo boo")
});

app.use("/products",(req, res, next)=>{
    console.log(req.body)
    console.log("inside products")
    res.redirect("/");
});

app.use("/",(req, res, next)=>{
    res.send("<h1>welcome to the page</h1>")
    console.log("inside slash")
})

app.listen(4000)
const express =require ("express");
const app = express();
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({extended:false}));

app.use ("/boo",(req, res, next)=>{
    console.log("inside middleware 1");
    res.send('<form action="/product" method ="POST"><input type="text" name="title"> <button type="submit"> ADD something</button> </forn>')
    // next();
});

app.use ("/login",(req, res, next)=>{
    console.log("inside middleware 2")
    res.send("<h1>login<h1>")
    // res.send("<h2>haha<h2>")
    // next();
});

app.use ("/product",(req, res, next)=>{
    console.log(req.body)
    console.log('inside the slash')
    res.redirect("/")
});

app.use ("/", (req, res, next)=>{
    console.log("inside middleware 3")
    res.send("<h1>this is a page</h1>")
});


port = 4000
console.log (`server running on ${port}`)
app.listen(port)
const path = require("path");
const express=require("express");
const router = express.Router();


router.get("/add-product",(req,res,next)=>{
    res.sendFile(path.join(__dirname,"../","views","add-product.html"))
})
router.post("/add-product",(req,res,next)=>{
    res.sendFile(path.join(__dirname,"../","views","add-product.html"))
})

router.get ("/boo",(req, res, next)=>{
    console.log("inside middleware 1");
    res.send('<form action="/product" method ="POST"><input type="text" name="title"> <button type="submit"> ADD something</button> </forn>')
    // next();
});

router.get ("/login",(req, res, next)=>{
    console.log("inside middleware 2")
    res.send("<h1>login<h1>")
    // res.send("<h2>haha<h2>")
    // next();
});

router.post ("/product",(req, res, next)=>{
    console.log(req.body)
    console.log('inside the slash')
    res.redirect("/index")
});

router.get ("/home",(req,res, next)=>{
    res.render("home.ejs")
});



module.exports =router;
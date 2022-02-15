const express = require("express");
const router = express.Router();

router.get("/dome",(req, res, next)=>{
    res.render("dome.ejs")
});

router.post("/gome",(req, res, next)=>{
    console.log(req.body);
    res.redirect("/index")
});


module.exports=router;
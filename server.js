const express =require ("express");
const app = express();
const bodyparser = require("body-parser");
const path =require("path")
const rootDir = require("./util/path");

adminRoutes=require("./routes/admin");
shopRoutes=require("./routes/shop");
domeRoutes= require("./routes/dome");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(bodyparser.urlencoded({extended:true}));

app.use("/admin",adminRoutes);
app.use(domeRoutes);
app.use(shopRoutes);

// app.use((req,res,next)=>{
//     res.status(404).send("<h1 style='color:red'>page not found</h1>")
// });
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,"views","404.html"))
});

// app.use((req,res,next)=>{
//     res.status(404).send('<body><img style="width: 100vw;" src="../public/assets/"></body></html>')
// });

port = 4000
console.log (`server running on ${port}`)
app.listen(port)
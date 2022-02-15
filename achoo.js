const http = require("http");
// const fill = require ("./test")

const server=http.createServer((req,res)=>{
    console.log(req.url, req.headers)
    res.setHeader("Content-Type","text/html")
    res.write("<html>")
    res.write("<body>heyoo</body>")
    res.write("</html>")
    res.end();
});
// console.log(`server running on port ${port}`)

server.listen(5000);
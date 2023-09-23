const express = require("express")
const app = express()
const http = require("http")
const server = http.createServer(app)
const ejs = require("ejs")
const path = require("path")
const fs = require("fs")

const indexpage = fs.readFileSync("./index.ejs","utf-8")
app.use(express.json())
app.use(express.static(path.join(__dirname, "js")));
app.get("/",(req,res)=>{
    const renderPage = ejs.render(indexpage,{

    })

    res.writeHead(200,{"Content-Type":"text/html"})
    res.write(renderPage)
    res.end()
    
})
server.listen(3000,()=>{
    console.log("server run")
})
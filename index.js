var express = require("express"),
http = require("http"),
morgan = require("morgan"),
app = express()



//app setup 
app.use(morgan("combined"))
app.set("port", process.env.PORT || 3000)
app.use(express.static("public"))

//server setup 
var server = http.createServer(app)
server.listen(app.get("port"), function(){	console.log("Server is running at port: ", app.get("port") )})
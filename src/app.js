const { name } = require("ejs");
const express = require("express");
const app = express();
const port = 8000; 
app.set("view engine", "ejs");


app.use(express.urlencoded({
    extended: true
}));


app.get("/", function(request, response){
    response.render("index")
})

app.get("/about", function(request, response){
    response.render("about")
})

app.get("/help", function(request, response){
    response.render("help")
})

app.get("/weather", function(request, response){
    response.render("weather")
})

app.listen(port, function(){
    console.log("Listening at http://localhost:8000/")
})

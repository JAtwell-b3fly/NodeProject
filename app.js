const {render} = require("ejs");
const express = require("express");
const morgan = require("morgan");

const app = express();

//listen to request
app.listen(3000);

//setup view engine
app.set("view engine", "ejs");

const students = [
    {
        name: "Jocelyn",
        surname: "Atwell",
        age: "23"
    },
    {
        name: "Preston",
        surname: "Magakwe",
        age: "25"
    },
    {
        name: "Shania",
        surname: "Ludick",
        age: "24"
    },
    {
        name: "Maxine",
        surname: "Geard",
        age: "25"
    },
    {
        name: "Michael",
        surname: "McAnda",
        age: "26"
    },
    {
        name: "Josh",
        surname: "Atwell",
        age: "20"
    }
]

//Middleware
app.use(morgan("dev"));

/*app.use((req,res, next) => {
    console.log("hostname", req.hostname);
    console.log("url", req.path);
    console.log("method", req.method);
    next()
}); */

app.get("/", (req, res)=>{
    //res.sendFile("./views/index.html", {root: __dirname})
    res.render("index", {students, title: "Home"})
});

app.get("about", (req, res) => {
    //res.status(200).sendFile("./views/about.html", {root: __dirname})
    res.render("about", {title: "About"});
});

//redirect
//app.get("./about-us", (req, res) => {
    //res.redirect("/about")
//});

app.use((req,res) => {
    //res.status(404).sendFile("./views/404.html", {root: __dirname})
    res.status(404).render("404", {title: "404"});
});
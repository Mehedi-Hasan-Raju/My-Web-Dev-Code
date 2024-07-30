const express = require("express");
const app = express();
const port =7777;
const path = require("path");

const { v4: uuidv4 } = require('uuid');


app.use(express.urlencoded({extended:true}));

app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id:uuidv4(),
        username : "apnacollege",
    content : "I love coading",
    },
    {
        id: uuidv4(),
        username: "rahul kumar",
        content: "Hard working is important to achive success",
    },
    {
        id:uuidv4(),
        username:"mehedi",
        content:"i got slected for my 1st internship",
    },
];


app.get("/posts" ,(req, res) => {
   res.render("index.ejs", {posts});
});

app.get("/posts/new" ,(req, res) => {
    res.render("form.ejs");
 });

 app.post("/posts", (req , res) => {
    let {username , content} = req.body;
    let id = uuidv4();
    posts.push({id, username, content});
    res.send("post req working");
 })

app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", {post} );
})

app.listen(port, () => {
    console.log("listning to port: 7777");
});

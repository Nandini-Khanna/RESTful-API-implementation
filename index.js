const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');
app.use(methodOverride('_method'));


app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));


let posts = [
    {   id:uuidv4(),
        username:"nandini",
        content:"this is my first post"
    },
    {    id:uuidv4(),
        username:"nimisha",
        content:"this is my first post"
    },
    {     id:uuidv4(),
        username:"gaurang",
        content:"hardwork is important to achieve success"
    },
    {   id:uuidv4(),
        username:"shradhha",
        content:"I got selected for my internship"
    }
    

];

app.get("/posts", (req, res) => {
    res.render("index.ejs",{posts}); 
});
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs")
});
app.post("/posts",(req,res)=>{
   let {username,content}=req.body;
   posts.push({ id: uuidv4(),username,content});
   res.redirect("/posts"); 
});
app.get("/posts/:id",(req,res)=>{
 let {id}=req.params;
 let post =posts.find((p)=>id===p.id);
 console.log(post);
 res.render("show.ejs",{post});
});
app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let newContent=req.body.content;
    let post=posts.find((p)=>id===p.id);
    post.content=newContent;
    console.log(post);
    res.send("patch request working");
});
app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", { post });
     
});
app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
     posts = posts.filter((p) => id !== p.id);
     res.redirect("/posts"); 
    console.log('Server started on port 3000');
console.log('Express server listening...');
console.log('Posts data:', posts);});
app.listen(port, () => {
    console.log("Listening to port:3000 ");
});

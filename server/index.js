import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";
import path from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;

app.use(express.urlencoded({extended:true}));3
app.use(express.static(path.join(__dirname, "..", "public")));

const tasks = [];


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});


app.post("/submit", (req,res)=>{
    tasks.push(req.body)
    res.redirect("/");
});

app.get("/my-tasks", (req,res)=>{
    res.json(tasks)
})

app.post("/delete-task",(req,res)=>{
    const index = req.body.taskID
    tasks.splice(index,1);
    res.redirect("/")
})

app.listen(port, ()=>{

});
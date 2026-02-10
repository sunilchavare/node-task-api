const express = require("express");
const router = express.Router();
let tasks = [
    {id: 1, title: "Learn Node basics", completed: false},
    {id: 2, title: "Build first api", completed: false}
];

router.get("/",(req, res)=>{res.json(tasks);
});

router.post("/",(req,res)=>{
    const newTask={
        id:tasks.length+1,
        title:req.body.title,
        completed:false
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

router.put("/:id",(req,res)=>{
    const taskId=parseInt(req.params.id);
    const task= tasks.find(t=>t.id=== taskId);
    if(!task)
    {
        return res.status(404).json({message:"Task not found "});

    }
    task.title=req.body.title??task.title;
    task.completed=req.body.completed??task.completed;
    res.json(task);
});

module.exports = router;
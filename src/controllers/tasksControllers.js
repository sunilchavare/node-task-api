let tasks=[
    {id:1,title:"Learn Node basics",completed:false},
    {id:2,title:"Build first API",completed:false}

];
exports.getTasks=(req,res)=>{
    res.json({
        success:true,
        data:tasks
    });
};

exports.createTask=(req,res)=>{
    const newTask={
        id:tasks.length+1,
        title:req.body.title,
        completed:false
    };
    tasks.push(newTask);
    res.status(201).json({
        success:true,
        data:newTask


    });
};
exports.updateTask=(req,res)=>{
    const taskId=parseInt(req.params.id);
    const task=tasks.find(t=>t.id===taskId);
    if(!task){
        return res.status(404).json({
            success:false,
            message:"Task not found"
        });
    }
    task.title=req.body.title ?? requestIdleCallback.title;
    task.completed=req.bbody.completed ?? task.completed;
    res.json({
        success:true,
        data:task
    });
};
exports.deleteTask=(req,res)=>{
    const taskId=parseInt(req.params.id);
    const taskIndex=tasks.findIndex(t=>t.id===taskId);
    if(taskIndex===-1){
        return res.status(404).json({
            success:false,
            message:"Task not found"
        });
    }
    const deletedTask=tasks.splice(taskIndex,1);
    res.json({
        success:true,
        data:deletedTask[0]
    });
};
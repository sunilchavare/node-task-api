const express = require("express");
const app = express();
const PORT = 3000;
const taskRoutes= require("./src/routes/tasks");
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Node Task API is running");
});
app.use("/tasks",taskRoutes);
app.listen(PORT,()=>{
  console.log(`server running on port ${PORT}`);
});

app.use((err,req,res,next)=>
{
  console.error(err.stack);
  res.status(500).json({message:"Internal Server Error"});

});

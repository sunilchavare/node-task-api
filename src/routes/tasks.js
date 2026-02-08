const express = require("express");
const router = express.Router();
let tasks = [
    {id: 1, title: "Learn Node basics", completed: false},
    {id: 2, title: "Build first api", completed: false}
];

router.get("/",(req, res)=>{res.json(tasks);
});



module.exports = router;
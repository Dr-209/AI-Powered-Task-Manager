const express=require("express")
const router=express.Router();
const {createEmp,getAllEmp, suggestTask, createTask, getAllTask}=require("../controller/taskController");
const { route } = require("./empRoute");

router.post("/suggest",suggestTask)
router.post("/create",createTask)
router.get("/getTaskList",getAllTask)
module.exports=router
const express=require("express")
const router=express.Router();
const {createEmp,getAllEmp, suggestTask}=require("../controller/taskController");
const { route } = require("./empRoute");

router.post("/suggest",suggestTask)

module.exports=router
// import EmployeeManagemnt from "./components/EmployeeManagement"; 

import { useState } from "react"
import EmployeeManagement from "./components/EmployeeManagement"
import Header from "./components/Header"
import TaskManagement from "./components/TaskManagement"
import { useEffect } from "react";
// import { response } from "express";

 
// import TaskManagement from "./components/TaskManagement";
 
function App(){
const [employees,setEmployees]=useState([]);
const [error,setError]=useState("")

useEffect(()=>{
  fetch("http://localhost:5500/api/emp/empList")
  .then((response)=>{
    if(!response.ok) throw new Error ("Failed to fetch employees..")
      return response.json();
  })
  .then((data)=>{
    setEmployees(data);
    console.log("emp data",data);
  })
  .catch((error)=>{
    setError(error.message);
  })
},[])

   return( 
   <div id="container" className="bg-gray-900 h-screen"> 
   <Header/> 
   <div className="w-10/12 m-auto flex justify-between "> 
   <EmployeeManagement/>
    <TaskManagement employees={employees}/>
     </div> 
   </div> 
   ) }
    export default App
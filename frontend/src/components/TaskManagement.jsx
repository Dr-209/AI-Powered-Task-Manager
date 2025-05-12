
import React, { useState } from 'react'
import axios from 'axios';
const TaskManagement = ({ employees }) => {
   const [taskTitle, setTaskTitle] = useState("");
   const [taskDesc, setTaskDesc] = useState("")
   const [assignedEmp, setAssignedEmp] = useState("");
   const [suggestions, setSuggestions] = useState([]);
   const [predictingTime, setPredictingTime] = useState(null)

   //Auto-comletion suggetion API
   const handleTaskSuggetion = async (e) => {
      // setTaskTitle(e.target.value);
      if (taskTitle.length > 3) {
         try {
            const response = await axios.post("http://localhost:5500/api/task/suggest",
               { input: taskTitle });
            setSuggestions(response.data.suggestions.split("\n"));
            console.log("Suggestions:", suggestions);

         } catch (error) {
            console.log("Error while fetching suggestions:", error)
         }
      }
   }
const handleAssignTask=async()=>{
try {
   const res=await axios.post("http://localhost:5500/api/task/createTask",
      {taskTitle,taskDesc,assignedEmp})
      setTaskTitle("");
      setTaskDesc("");
      setAssignedEmp("");
      setSuggestions([])
} catch (error) {
   console.error("Error creating task:",error)
}
}

   return (
      <div className='emp-wrapper bg-white shadow-md rounded p-5 w-7/12 mb-4'>
         <h2 className='text-center text-3xl font-semibold mb-5'>Add Employee</h2>
         <div className='input-group mb-4'>
            <label className='block'>Enter Task Title</label>
            <input type='text' placeholder='Enter Task Title' className='p-2 border w-full'
               value={taskTitle}
               onChange={(e) => setTaskTitle(e.target.value)}
            />

            {suggestions.length > 0 && (
               <ul className='bg-red-200'>
                  {suggestions.map((s, i) => (
                     <li key={i}>
                        {s}
                     </li>
                  ))}
               </ul>
            )}
         </div>

         <div className='input-group mb-4'>
            <label className='block'>Enter Task Description</label>
            <textarea 
            value={taskDesc}
            onChange={(e)=>setTaskDesc(e.target.value)} type='text' placeholder='Enter Task Description' className='p-2 border w-full' /> </div>
         <div className='input-group mb-4'>
            <label className='block'>Select Employee</label>
            <select
            onChange={(e)=>setAssignedEmp(e.target.value)}
            className='p-2 border w-full'>
               <option>Select Employee</option>
               {
                  employees.map((emp) => (
                     <option key={emp.empId} value={emp.empName} className='text-black'>
                        {emp.empName}</option>
                  ))
               }
            </select>
         </div>
         <div className='btn-group text-center'>
            <button onClick={handleAssignTask} className='w-1/3 bg-indigo-500 text-white py-3' >Assign Task</button>
            <button onClick={handleTaskSuggetion} className='w-1/2 bg-indigo-500 text-white py-3 ml-2' >Generate AI Task</button>
         </div>
      </div>
   )
}
export default TaskManagement;
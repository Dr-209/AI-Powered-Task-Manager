import React, { useState } from 'react' 
import axios from 'axios'; 
const EmployeeManagement = () => 
    {
         const [empId, setEmpId] = useState(""); 
         const [empName, setEmpName] = useState("") 
         const [empSkills, setEmpSkills] = useState("");
          
         const handleAddEmp = async (e) =>
             {
                alert("hii")
                 e.preventDefault(); 
                 try {
                     const res = await axios.post("http://localhost:5500/api/emp/create", 
                   
                     { empId,  empName, empSkills }) 
                     console.log(res)
                     console.log("frontend")
                     setEmpId("")
                      setEmpName("") 
                      setEmpSkills("")
                     } catch (error) {
                         console.log("Error creating new Emp", error) 
                        } } 
                        return (
                        <div className='emp-wrapper bg-white shadow-md rounded p-5 w-1/3 mb-4'>
                             <h2 className='text-center text-3xl font-semibold mb-5'>Add Employee</h2> 
                             <div className='input-group mb-4'> 
                                <label className='block'>Enter Emp ID</label> 
                                <input type='text' placeholder='Enter Emp id' className='p-2 border w-full' value={empId} onChange={(e) => setEmpId(e.target.value)} /> 
                                </div>
                                 <div className='input-group mb-4'>
                                     <label className='block'>Enter Emp Name</label>
                                      <input type='text' placeholder='Enter Emp name' className='p-2 border w-full' value={empName} onChange={(e) => setEmpName(e.target.value)} /> </div>
                                       <div className='input-group mb-4'> 
                                        <label className='block'>Enter Emp Skills</label>
                                         <input type='text' placeholder='Enter Emp skills' className='p-2 border w-full' value={empSkills} onChange={(e) => setEmpSkills(e.target.value)} />
                                          </div> <div className='btn-group text-center'>
                                             <button className='w-1/2 bg-indigo-500 text-white py-3' onClick={handleAddEmp} >Add New Emp</button> 
                                             </div> 
                                             </div>
                                             )
                                              }
                                              export default EmployeeManagement;
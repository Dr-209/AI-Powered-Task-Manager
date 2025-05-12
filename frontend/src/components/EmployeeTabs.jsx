// import EmployeeManagement from "./components/EmployeeManagement"; 
// import Header from "./components/Header"; 
// import TaskManagement from "./components/TaskManagement";
//  function App() 
//  {
//      return (
//      <div id="container" className="bg-gray-100 h-screen"> 
//      <Header /> 
//      <div className="w-10/12 m-auto flex justify-between "> 
//      <EmployeeManagement /> 
//      <TaskManagement /> 
//      </div> 
//      </div>
//      )
//      }
//       export default App


export const TaskBoard = ({ employees, taskList }) => {
    return (
        <>
            <h3>
                Task Board
            </h3>
            <ul className="flex justify-around">
                {taskList.map((task) => (
                    <li key={task.taskName} >
                        <p> {task.empName}</p>
                        <p>{task.taskTitle}</p>
                        <p>{task.taskDesc}</p>
                        <p>{task.estimatedTime}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}
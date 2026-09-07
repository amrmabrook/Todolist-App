import { useContext, useEffect, useState } from "react"
import Tasks from "./Tasks"
import { MainConfig } from "../store/MainConfig"
function FormTodo(){
const {task,setTask}= useContext(MainConfig)
const [newTask,setNewTask] = useState(()=>{
  const myData = localStorage.getItem("mission"); 
  return myData ? JSON.parse(myData) : [] })




const handleSubmit = (e)=>{
  e.preventDefault();
  if(task.text.trim() !==""){
    setNewTask((prev)=>([...prev,{...task,id:crypto.randomUUID(),completed:false}]))
  setTask((prev)=>(prev,{text:""}))

  }

  
}



//handledelet 
const handleDelete = (index)=>{
  const newList = newTask.filter((item)=>{
    return index !== item.id


  })

  setNewTask([...newList])
}


const handleCompleted = (index)=>{
  //  newTask[index].completed = !newTask[index].completed;
   setNewTask(prevTasks =>
    prevTasks.map((task, i) =>
      i === index
        ? { ...task, completed: !task.completed }
        : task
    )
  );
}

useEffect(()=>{
  console.log(newTask)

  localStorage.setItem("mission",JSON.stringify(newTask));
},[newTask])


  return (
    <>
<div className="container">
      <h1 style={{color:"green",textAlign:"center",marginBottom:"10px"}}>ToDo List</h1>

    <form className="form" onSubmit={handleSubmit}>
        <input type="text" placeholder="add task" value={task.text} onChange={(e)=>setTask({...task,text:e.target.value})} />
        <input type="submit" value="add task" />
    </form>
    <Tasks newTask={newTask} handleDelete={handleDelete} handleCompleted={handleCompleted}/>
</div>
    
    
    </>
  )
}

export default FormTodo

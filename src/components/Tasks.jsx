// import { useState } from "react";
import "../App.css"
import { RiDeleteBack2Fill } from "react-icons/ri";

function Tasks({newTask,handleDelete,handleCompleted}) {


  return (
    <>
    <ul className="tasks-list">
        {newTask.map((item,index)=><li key={item.id} className="task" onClick={()=>handleCompleted(index)}>
          <span className={item.completed?"completed":""}>{item.text}</span>
          <RiDeleteBack2Fill className="delet-btn" onClick={()=>handleDelete(item.id)}/>

</li>)}
    </ul>
    </>

  )
}

export default Tasks
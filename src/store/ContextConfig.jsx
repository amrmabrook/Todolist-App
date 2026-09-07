import { useState } from "react";
import  {MainConfig}  from "./MainConfig";



const ContextConfig = ({children})=>{
const [task,setTask] = useState({
    text:"",
    id:"",
    completed:false
})


const msg = "form store"


  return (
    
    <MainConfig.Provider value={{task,setTask,msg}}>{children}</MainConfig.Provider>
  )
}

export default ContextConfig
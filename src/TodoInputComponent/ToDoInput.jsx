import React from "react";
 import { useContext,useState } from "react";
import { TextContext } from "../Context";


 const TodoInput=() =>{
 const{setTodoarray,todoarray}=useContext(TextContext);
 const[ toDoInput,setToDoInput]=useState("");

 const handleChange=(e)=>{
     setToDoInput(e.target.value);

 }
 const handleClick=()=>{

     if(toDoInput!==""){
        let arr=[...todoarray];  // this way we put the data in array
        arr.push(toDoInput);
       setTodoarray(arr);
     }

     document.getElementById("input").value="";
    setToDoInput("");

 }
    return(
        <>
        <h1 className="text-[30px] italic font-semibold  font-mono  text-[#808080] pb-5">To-Do App</h1>

        <div className="  flex flex-col justify-center items-center h-[30%] w-[80%]  p-8">
   
                <input onChange={handleChange} id="input" type="text" placeholder="New Todo" className=" h-[20%] w-[100%]  p-4 border border-solid border-2 "  />

                <button onClick={handleClick}className="h-[30%] w-[100%] mt-8 bg-teal-600 text-white rounded hover:bg-teal-500"> Add New Task</button>


        </div>

        </>
    );

 }
 export default TodoInput;

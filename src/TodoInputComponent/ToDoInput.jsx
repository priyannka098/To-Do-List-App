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
    console.log("toDoInput");
    document.getElementById("input").value="";
    setToDoInput("");

    if(toDoInput!==""){
        let arr=[...todoarray];
        arr.push(toDoInput);
        setTodoarray(arr);
    }

 }
    return(
        <>
        <h1 className="text-[24px] not-italic font-semibold pb-5">TodoInput</h1>

        <div className="  flex flex-col justify-center items-center h-[30%] w-[80%] border border-solid border-[2px] border-inherit p-8">
   
                <input onChange={handleChange} id="input" type="text" placeholder="New Todo"className=" h-[20%] w-[100%]  p-4 border border-solid border-2 "  />

                <button onClick={handleClick}className="h-[30%] w-[100%]  mt-8 p-2 bg-teal-600 text-white rounded hover:bg-teal-500" > Add new Task</button>


        </div>

        </>
    );

 }
 export default TodoInput;

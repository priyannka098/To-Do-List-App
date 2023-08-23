import React,{useContext, useState} from "react";
import { TextContext } from "../Context";

 const Delete=() =>{
    const {todoarray,setTodoarray}=useContext(TextContext);
    const{checkedItems,setCheckedItems}=useContext(TextContext);


    const deleteAllTask=()=>{
        setTodoarray([]);
    }

const deleteDoneTask=()=>{
    let arr=[...todoarray]; 
 checkedItems.forEach(element=>{
  arr = arr.filter((item)=>{ return item!=element});
 })
 setTodoarray(arr);


}

    return(
        <>
        <div className="flex justify-between flex-row justify-center items-center h-[30%] w-[80%] ">
            <button onClick={deleteDoneTask}  className="text-white bg-red-500 border border-none rounded w-[40%] h-[35%]"> Delete done tasks</button>
            <button onClick={deleteAllTask} className=" text-white bg-red-500 border border-none rounded w-[40%] h-[35%]"> Delete all tasks</button>

        </div>
        </>
    );

 }
 export default Delete;


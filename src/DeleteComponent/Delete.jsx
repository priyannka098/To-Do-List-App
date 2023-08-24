import React,{useContext, useState} from "react";
import { TextContext } from "../Context";

 const Delete=() =>{
    const {todoarray,setTodoarray}=useContext(TextContext);
    const{checkedItems,setCheckedItems}=useContext(TextContext);
    const[showDelete,setShowDelete]=useState(false);


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
       { todoarray.length>0 && <div className="flex justify-between flex-row justify-center items-center h-[30%] w-[80%] ">
            <button onClick={deleteDoneTask}  className="text-white bg-[#008080] border border-none rounded w-[40%] h-[35%] hover:bg-[#FF00FF]"> Delete Done Tasks</button>
            <button onClick={deleteAllTask} className=" text-white bg-[#008080] border border-none rounded w-[40%] h-[35%] hover:bg-[#FF00FF]"> Delete All Tasks</button>

        </div>}
        </>
    );

 }
 export default Delete;


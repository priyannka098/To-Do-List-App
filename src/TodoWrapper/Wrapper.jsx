import React, { useState } from "react";
import TodoInput from "../TodoInputComponent/ToDoInput"; 
import  List from "../TodoListItemComopent/List" ;
import Delete from "../DeleteComponent/Delete";
import {TextContext} from "../Context";

 const Wrapper=() =>{
     const[todoarray,setTodoarray]=useState([]);
    return(
        <>
        <div className="h-screen w-screen flex flex-col justify-center items-center">
        <TextContext.Provider value={{todoarray,setTodoarray}}>
            <TodoInput />
            < List/>
            <Delete /> 
        </TextContext.Provider>
        </div>

        </>
    );

 }
 export default Wrapper;
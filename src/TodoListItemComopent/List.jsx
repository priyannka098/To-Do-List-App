import React, { useContext,useState } from "react";
 import Item from "../TodoItemComponent/Item";
 import { TextContext } from "../Context";

  const List = ()=>
  {
    const {todoarray,setTodoarray}=useContext(TextContext);
  
    return (
         <>
          <h1 className="text-[25px] not-italic font-semibold p-4">TodoList</h1>
         <div className =" w-[80%] h-[70%]  flex flex-col  items-center overflow-y-auto">
        
        
         {todoarray.map((text,index)=>
         <Item key={index} data={text} index1={index}  />  
         )}
        </div>
         </>

  
    )
  }
  
  export default List;
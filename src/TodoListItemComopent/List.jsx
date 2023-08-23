import React, { useContext,useState } from "react";
 import Item from "../TodoItemComponent/Item";
 import { TextContext } from "../Context";

  const List = ()=>
  {
    const {todoarray,setTodoarray}=useContext(TextContext);
  
    return (
      <>
         {todoarray.length>0 && <div className="flex w-full h-full flex-col justify-center items-center">
          <h1 className="text-[25px] not-italic font-semibold  font-mono  text-[#808080] p-4">Items</h1>
          <div className =" w-[80%] h-[70%]  flex flex-col  items-center overflow-y-auto">
          
          
          {todoarray.map((text,index)=>
          <Item key={index} data={text} index1={index} />  
          )}
          </div>
        </div>}
      </>

        

  
    )
  }
  
  export default List;
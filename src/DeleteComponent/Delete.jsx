import React from "react";
 const Delete=() =>{
    return(
        <>
        <div className="flex justify-between flex-row justify-center items-center h-[30%] w-[80%] ">
            <button  className="text-white bg-red-500 border border-none rounded w-[40%] h-[35%]"> Delete done tasks</button>
            <button className=" text-white bg-red-500 border border-none rounded w-[40%] h-[35%]"> Delete all tasks</button>

        </div>

        </>
    );

 }
 export default Delete;
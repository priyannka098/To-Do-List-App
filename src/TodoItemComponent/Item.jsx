import React, { useContext } from "react";
import { TextContext } from "../Context";

 const Item=( props) =>{
    const {todoarray,setTodoarray}=useContext(TextContext);


    const handleClick=()=>{
        
        console.log(props.index1 );
       let copydata= [...todoarray];
       let newArray= copydata.filter((element, index)=> {return index!=props.index1});
       setTodoarray(newArray);
        console.log(JSON.stringify(newArray));
        

    }
    return(
        <>

            <div className="flex justify-between items-center w-full border-2 rounded mb-1">
                <div className="w-[90%] p-1">{props.data}
                </div>
                
            <div className=" flex justify-end w-[10%]">
                <input  className="m-1 p-2" type="checkbox"  name ="checkbox1" value="checkbox"/>
                <label for="checkbox1"></label>
                <button   className=" bg-blue-600 m-1 p-1 text-white rounded border-rose-600 hover:bg-gray-600">Edit</button>
                <button onClick={handleClick} className="bg-red-600 m-1 p-1 text-white rounded hover:bg-green-600">Delete</button>
            </div>
            </div>

        </>
    );

 }
 export default Item;
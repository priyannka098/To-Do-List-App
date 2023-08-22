import React, { useContext, useState } from "react";
import { TextContext } from "../Context";

 const Item=({index1,data}) =>{
    const {todoarray,setTodoarray}=useContext(TextContext);
    const[editing,setEditing]=useState(false);
    const[text, setText] = useState(data);

    const handleClick=()=>{
      console.log(index1);
       let copydata= [...todoarray];
       let newArray= copydata.filter((element, index)=> {return index!=index1});
       setTodoarray(newArray);
        console.log(JSON.stringify(newArray));
    }
    const handleEditing=()=>{
        setEditing(true);

    }
    const handleUpdate=()=>{
        // SetUpdate(true);
        setEditing(false);
        let newarr=[...todoarray]; //make copy of todoarray
        newarr[index1]=text;
        setTodoarray(newarr);

    }
    const handleDuplicateInput=(e)=>{
      let newText = e.target.value;
      setText(newText);
    }
    return(
        <>

           {!editing && <div className="flex justify-between items-center w-full border-2 rounded mb-1">

                <div className="w-[90%] p-1">{data}
                </div>
                
            <div className=" flex justify-end w-[10%]">

                <input  className="m-1 p-2" type="checkbox"  name ="checkbox1" value="checkbox"/>
                <label for="checkbox1"></label>

                <button  onClick={handleEditing} className=" bg-blue-600 m-1 p-1 text-white rounded border-rose-600 hover:bg-gray-600">Edit</button>

                <button onClick={handleClick} className="bg-red-600 m-1 p-1 text-white rounded hover:bg-green-600">Delete</button>
               
            </div>
            </div>}

        
         { editing && <div className=" flex justify-between items-center w-full border-2 rounded mb-1"> 
           
            <input onChange={handleDuplicateInput} type="text" id= "input3"  className=" w-full mb-1 p-1"
            value={text}/>

            <div className="">
            <button onClick={handleUpdate} className=" bg-yellow-600 m-1 p-1 text-white rounded hover:bg-orange-600">Update</button>
            </div>
           </div>} 
           
            





            

        </>
    );

 }
 export default Item;
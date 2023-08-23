import React, { useContext, useEffect, useState } from "react";
import { TextContext } from "../Context";

 const Item=({index1,data}) =>{
    const {todoarray,setTodoarray, checkedItems, setCheckedItems}=useContext(TextContext);
    const[editing,setEditing]=useState(false);
    const[text, setText] = useState(data);
    const[checked, setChecked] = useState(false);
    

    const handleDelete=()=>{
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
    const handleCheckBox=(e)=>{
        let curValue = e.target.checked; //for checkbox we write  e.target.checked
        setChecked(curValue);
        if(curValue === true) {
            let newcheck=[...checkedItems];
            newcheck.push(text);
            setCheckedItems(newcheck);
        } else {
            let checkedCopy =[...checkedItems];
            checkedCopy = checkedCopy.filter(item => item!==text);
            setCheckedItems(checkedCopy);
        }
    }
    return(
        <>

           {!editing && <div className="flex justify-between  items-center w-full rounded mb-4 border-2 border-white p-2">

                <div className="w-[75%] ">
                <span className="break-normal">{data}</span>
                </div>
                
            <div className="flex justify-end w-[25%]">

                <input onChange={handleCheckBox} className="m-1 p-2" type="checkbox"  name="checkbox1" 
                value ={checked}/>
                <label for="checkbox1"></label>

                <button  onClick={handleEditing} className=" bg-teal-500 m-1 p-1 w-24 text-sm text-white rounded border-rose-600 hover:bg-gray-600">Edit</button>

                <button onClick={handleDelete} className="bg-red-600 m-1 p-1 w-24 text-sm text-white rounded hover:bg-red-800">Delete</button>
               
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
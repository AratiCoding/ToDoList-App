import React, { useState } from 'react';
import ToDoList from "./ToDoList";


const App=()=>{

  const [inputList, setinputList]=useState("");
  const [Items, setItems]= useState([]);
  const itemEvent=(event)=>{
    setinputList(event.target.value);
  };
  const listOfItems=()=>{
     setItems((oldItems)=>{
        return [...oldItems, inputList];
     });
     setinputList("");

  };
  const deleteItems=(id)=>{
    console.log("deleted");
    setItems((oldItems)=>{
      return oldItems.filter((arrElem, index)=>{
       return index !== id;
      })
    })
 };
return(
  <>
  <div className='main-div'>
    <div className="center-div">
      <br />
      <h1>To Do List</h1>
      <br />
      <input type="text" placeholder='Add a Item' value={inputList} onChange={itemEvent} />
      <button onClick={listOfItems}>+</button>
      <ol>
       {  
         Items.map((itemval, index)=>{
           return <ToDoList key={index}
                           id={index}
                            text={itemval}
                            onSelect={deleteItems} />;
        })
      }
      </ol>
    </div>

  </div>
  </>
  );
};

export default App;

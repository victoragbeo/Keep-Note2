import React, { useState } from "react";

function App() {
  const [inputNotes, setInputNote] = useState("");
  const [newItem, setNewItem] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputNote(newValue);
    

  }

  function clickAdd() {
    setNewItem(prevValue => {
      return [ ...prevValue,
       inputNotes]
      });
// setInputNote("") changes the input textbox blank again for the next todo input
setInputNote("");
    
 
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={inputNotes} type="text" />
        <button onClick={clickAdd}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
  {newItem.map(eachItem => <li >{eachItem}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
        <ToDoComponent />
      </header>
    </div>
  );
}

const ToDoComponent = () => {
  const [title, setTitle] = useState("Add Todo");
  const [description, setDescription] = useState("Description");
  const [importance, setImportance] = useState();
  const [submit, setSubmit] = useState();

  return (
    <div className="app-container">
      <div id="title">
        <h4>Title</h4>
        <input
          id="text-input"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            console.log(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <h4>Description</h4>
        <input
          id="text-input"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
            console.log(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <h4>Importance</h4>
        <select
          id="input-field-importance"
          value={importance}
          onChange={(e) => {
            setImportance(e.target.value);
            console.log(e.target.value);
          }}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <hr></hr>
      <div>
      <button
        id="submit-button"
        value={submit}
        onClick={() => {
          setSubmit("Clicked");
          console.log(submit);
        }}
      >
        SUBMIT
      </button>
      </div>
    </div>
  );
};

export default App;

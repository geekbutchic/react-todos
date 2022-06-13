import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToDoComponent />
      </header>
    </div>
  );
}

const ToDoComponent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [importance, setImportance] = useState("");
  const [tasks, setTasks] = useState([]);

  const importanceOptions = [
    {
      title: "Low",
      value: "Low",
    },
    {
      title: "Medium",
      value: "Medium",
    },
    {
      title: "High",
      value: "High",
    },
  ];

  return (
    <div className="app-container">
      <h1>Add a To-Do</h1>
      <hr></hr>
      <h3>Title: {title}</h3>
      <p>{description}</p>
      {importance}
      <hr></hr>
      {tasks.map((task, index) => {
        return (
          <div
          key={index.toString()}
          >
            <h3>Title: {task.title}</h3>
            <p>{task.description}</p>
            <p>{task.importance}</p>
            <hr></hr>
          </div>
        )
      })}
      <div>
        <input
          type="text"
          value={title}
          placeholder="TITLE"
          onChange={(e) => {
            setTitle(e.target.value);
            console.log(title);
          }}
        ></input>
      </div>
      <div>
        <input
          type="text"
          value={description}
          placeholder="DESCRIPTION"
          onChange={(e) => {
            setDescription(e.target.value);
            console.log(description);
          }}
        ></input>
      </div>
      <select
      onChange={(e) => {
        setImportance(e.target.value)
      }}
      >
        {importanceOptions.map((importanceOption) => {
          return (
            <option
              key={importanceOption.value}
              value={importanceOption.value}
              >
              {importanceOption.title}
            </option>
            //WHAT MAP DOES UNDER THE HOOD
            // <option value={"low"}>
            //   {"Low"}
            // </option>
          )
        })}
      </select>
      <div>
        <button
        onClick={() => {
          const newTask = {
            title: title,
            description: description,
            importance: importance
          }
          console.log(newTask);
          const copyOfTask = [...tasks]
          copyOfTask.push(newTask)
          setTasks(copyOfTask)
        }}
        >
        SUBMIT
        </button>
      </div>
    </div>
  );
};

export default App;

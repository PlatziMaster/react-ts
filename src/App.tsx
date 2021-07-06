import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Avatar from "./Avatar";
import Task from "./Task";
import { TaskModel } from "./models/task.model";
import Button from "./Button";

function App() {

  // const [tasks, setTask] = useState<TaskModel[]>();
  const [tasks, setTask] = useState<Array<TaskModel>>([]);

  const getAllTasks = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const json = await data.json();
    setTask(json);
  }

  useEffect(() => {
    getAllTasks();
  }, [])

  const setUser = () => {
    console.log('click');
  }

  return (
    <div className="App">
      <header className="App-header">
        <Avatar name="as" age={2} />
        <Task
          title="Mi tarea"
          completed={true}
          styles={{ color: "yellow", border: 1 }}
          stylesMenu={{border: 'as'}}
          setUser={setUser}
        />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

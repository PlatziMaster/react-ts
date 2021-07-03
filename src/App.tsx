import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Avatar from "./Avatar";
import Task from "./Task";
import Button from "./Button";

function App() {

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

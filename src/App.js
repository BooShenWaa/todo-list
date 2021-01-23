import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>To-Do List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
      />
      <ToDoList />
    </div>
  );
}

export default App;

// https://youtu.be/pCA4qpQDZD8?t=2060

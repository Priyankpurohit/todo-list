import React, { useState } from "react";

import { MdDeleteForever } from "react-icons/md";
import "./todo.css";
const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [dateTime, setDateTime] = useState("");
  const handleInputChange = (value) => {
    setInputValue(value);
  };
  const handleformsubmit = (event) => {
    event.preventDefault();

    if (!inputValue) return alert("Empty Value Can't Be Entered!");
    if (task.includes(inputValue)) {
      setInputValue("");
      return alert("Task Already Entered!");
    }
    setTask((prevTask) => [...prevTask, inputValue]);

    setInputValue("");
  };

  //to do date and time

  setInterval(() => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString();

    const formattedTime = now.toLocaleTimeString();
    setDateTime(`${formattedDate} - ${formattedTime}`);
  }, 1000);

  //clearall
  const handleRemoveall = () => {
    setTask([]);
  };
  //task delete
  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((curTask) => curTask !== value);
    setTask(updatedTask);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo App</h1>
        <h2 className="date-time">{dateTime}</h2>
      </header>
      <section className="form">
        <form onSubmit={handleformsubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputValue}
              onChange={(event) => handleInputChange(event.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="todo-btn">
              Add Task
            </button>
          </div>
        </form>
      </section>
      <section className="myUnOrdList">
        <ul>
          {task.map((curTask, index) => {
            return (
              <li key={index} className="todo-item">
                <span>{curTask}</span>

                <button
                  className="delete-btn"
                  onClick={() => handleDeleteTodo(curTask)}
                >
                  <MdDeleteForever />
                </button>
              </li>
            );
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleRemoveall}>
          Clear All
        </button>
      </section>
    </section>
  );
};

export default Todo;
